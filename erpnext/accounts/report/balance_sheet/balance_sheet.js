// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["Balance Sheet"] = $.extend({}, erpnext.financial_statements);

erpnext.utils.add_dimensions("Balance Sheet", 10);

frappe.query_reports["Balance Sheet"]["export_hidden_cols"] = true;
