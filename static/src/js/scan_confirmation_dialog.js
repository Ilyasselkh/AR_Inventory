/** @odoo-module **/

import { Component, useExternalListener } from "@odoo/owl";
import { Dialog } from "@web/core/dialog/dialog";
import { patch } from "@web/core/utils/patch";
import { RelationalModel } from "@web/model/relational_model/relational_model";

class ScanConfirmationDialog extends Component {
    static template = "AR_Inventory.ScanConfirmationDialog";
    static components = { Dialog };
    static props = {
        barcode: String,
        title: String,
        message: String,
        close: Function,
    };

    setup() {
        this.buffer = "";
        this.lastKeyTime = 0;
        useExternalListener(document, "keydown", (event) => this.onKeydown(event), true);
    }

    onKeydown(event) {
        if (event.ctrlKey || event.altKey || event.metaKey) {
            return;
        }
        const now = Date.now();
        if (now - this.lastKeyTime > 500) {
            this.buffer = "";
        }
        this.lastKeyTime = now;

        if (event.key === "Enter" || event.key === "Tab") {
            if (this.buffer) {
                event.preventDefault();
                event.stopImmediatePropagation();
                if (this.buffer === this.props.barcode) {
                    this.props.close();
                }
            }
            this.buffer = "";
        } else if (event.key.length === 1) {
            // Keep scanner input inside the dialog; it must not reach the scan field.
            event.preventDefault();
            event.stopImmediatePropagation();
            this.buffer += event.key;
        }
    }
}

patch(RelationalModel.prototype, {
    setup(...args) {
        super.setup(...args);
        // Odoo 19 displays onchange warnings directly in _onchange. Intercept
        // only this model's successful scan response before the standard UI.
        const wrapOrm = (orm) => new Proxy(orm, {
            get: (target, property) => {
                if (property === "cache") {
                    return (...args) => wrapOrm(target.cache(...args));
                }
                if (property === "call") {
                    return async (model, method, ...args) => {
                        const response = await target.call(model, method, ...args);
                        const warning = response?.warning;
                        if (model === "araymond.inventory" && method === "onchange" &&
                            warning?.type === "ar_inventory_scan_success" && warning.barcode) {
                            const { warning: ignored, ...result } = response;
                            Promise.resolve(this.hooks.onWillDisplayOnchangeWarning(warning)).then(() => {
                                this.dialog.add(ScanConfirmationDialog, {
                                    barcode: warning.barcode,
                                    title: warning.title,
                                    message: warning.message,
                                });
                            });
                            return result;
                        }
                        return response;
                    };
                }
                const value = Reflect.get(target, property);
                return typeof value === "function" ? value.bind(target) : value;
            },
        });
        this.orm = wrapOrm(this.orm);
    },
});
