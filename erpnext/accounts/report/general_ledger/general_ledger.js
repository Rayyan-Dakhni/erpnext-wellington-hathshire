// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["General Ledger"] = {
	filters: [
		{
			fieldname: "company",
			label: __("Company"),
			fieldtype: "Link",
			options: "Company",
			default: frappe.defaults.get_user_default("Company"),
			hidden: 1,
		},
		// {
		// 	fieldname: "finance_book",
		// 	label: __("Finance Book"),
		// 	fieldtype: "Link",
		// 	options: "Finance Book",
		// },
		{
			fieldname: "from_date",
			label: __("From Date"),
			fieldtype: "Date",
			default: frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			reqd: 1,
			width: "60px",
		},
		{
			fieldname: "to_date",
			label: __("To Date"),
			fieldtype: "Date",
			default: frappe.datetime.get_today(),
			reqd: 1,
			width: "60px",
		},
		{
			fieldname: "account",
			label: __("Main Account Title"),
			fieldtype: "MultiSelectList",
			options: "Account",
			get_data: function (txt) {
				return frappe.db.get_link_options("Account", txt, {
					company: frappe.query_report.get_filter_value("company"),
				});
			},
		},
		{
			fieldname: "voucher_no",
			label: __("Voucher No"),
			fieldtype: "Data",
			// on_change removed - no categorization needed
		},
		{
			fieldname: "sub_account",
			label: __("Sub Account Title"),
			fieldtype: "Select",
			options: "\nAdmin fee\nAdministration fee\nBroker fee\nBrokerage fee\nBrokerage fee 1\nBrokerage fee 2\nCash\nCommitment fee\nCommitmnet fee\nExtension amount\nExtension fee\nExtension proceeds\nFeb 1 payment\nFeb payment\nFirst mortgage payout\nFirst mtg payment\nFrancesca Bruno TFSA\nFudns sent to lawyer\nFunds advacned to lawyer\nFunds advanced to lawyer\nFunds disbursed to client\nFunds received\nFunds received back\nFunds received from Olympia\nFunds sent to borrower\nFunds sent to lawyer\nFunds to lawyer\nFunds to payout first mortgage\nFunds transferred to 1077932\nGeneroso Bruno TFSA\nGianpiero Pisciotta TFSA\nGiovina Di Matteo TFSA\nGiulia Dippolito TFSA\nHelio Veiga RRSP\nIan Shoub RRSP\nIan Shoub TFSA\nInsurance\nInvestment account 1\nInvestment account 2\nIuliu Szabo TFSA\nJan payment\nJanety Santeramo TFSA\nJanice Genova TFSA\nJill Hernandez RRSP\nJohn Simmen (RRSP)\nJordan Applebaum RRSP\nKarin Schuster TFSA\nKim Pak (Non-registered)\nKrysia Mussakowski TFSA\nKsenia Kotova part 1\nKsenia Kotova part 2\nLegal fee\nLena Bellissimo RRIF\nLinda Simmen (Non-registered)\nLIRA\nLorenzo Bellissimo RRIF\nLucia Di Matteo RRSP\nLuigi Dippolito TFSA\nMariya Iqbal TFSA\nMark Dominichiello\nMatthew Genova RRSP\nMatthew Gneova TFSA\nMaya Dominelli\nMelissa Rubinoff TFSA\nMoreven Consulting Inc.\nNeelam Sharma RRSP\nNita Jobanputra LIRA\nNita Jobanputra RRSP\nOriginaiton fee\nOrigination fee\nOther\nOutstanding payments on first\nPart 1\nPart 2\nPart 3\nPart 4\nPer diem\nPeter Guido RRSP\nPrepaid interest\nPrepaid interest on first\nPrepaid interest on second\nPrincipal\nPrincipal for 225 Milestone\nPrincipal for 45 Wellington\nPrincipal funds received\nPrincipal paydown\nPrincipal paydown received\nProceeds advanced to lawyer\nProceeds disbrused to lawyer\nProfessional Fees\nPurushottam Sharma RRSP\nPurushottam Sharma TFSA\nRachel Rubinoff TFSA\nRenewal fee\nRetainer disbursed\nRetainer received\nRetainer recevied\nRetainer sent\nRetainer sent to lawyer\nRetiner received\nRevenue\nRobert Kerzner TFSA\nRRSP\nSamantha Kerzner FHSA\nSamantha Kerzner TFSA\nSanjay Jobanputra RRSP\nSean O'Leary TFSA\nShauna Merkur TFSA\nShrimati Naipaul TFSA\nSita Naipaul (non registered)\nSita Naipaul (personal)\nSita Naipaul TFSA\nSteven Bellissimo TFSA\nSydney kerzner TFSA\nTeresa Luchetta (personal)\nThird party insurance\nTotal extension amount\nTotal funds sent to lawyer\nTracy Coutu RRSP\nTransferred to 1077932\nVeronica Astone TFSA\nVictor Biderman (RRIF)\nViggolupo\nViggolupo (Anna Maria)\nVince Genova TFSA\nVivian Di Matteo TFSA",
		},
		{
			fieldname: "from_account",
			label: __("From Account"),
			fieldtype: "Data",
		},
		{
			fieldname: "to_account",
			label: __("To Account"),
			fieldtype: "Data",
		},
		// COMMENTED OUT FILTERS
		// {
		// 	fieldname: "against_voucher_no",
		// 	label: __("Against Voucher No"),
		// 	fieldtype: "Data",
		// },
		// {
		// 	fieldtype: "Break",
		// },
		// {
		// 	fieldname: "party_type",
		// 	label: __("Party Type"),
		// 	fieldtype: "Autocomplete",
		// 	options: Object.keys(frappe.boot.party_account_types),
		// 	on_change: function () {
		// 		frappe.query_report.set_filter_value("party", []);
		// 	},
		// },
		// {
		// 	fieldname: "party",
		// 	label: __("Party"),
		// 	fieldtype: "MultiSelectList",
		// 	options: "party_type",
		// 	get_data: function (txt) {
		// 		if (!frappe.query_report.filters) return;
		//
		// 		let party_type = frappe.query_report.get_filter_value("party_type");
		// 		if (!party_type) return;
		//
		// 		return frappe.db.get_link_options(party_type, txt);
		// 	},
		// 	on_change: function () {
		// 		var party_type = frappe.query_report.get_filter_value("party_type");
		// 		var parties = frappe.query_report.get_filter_value("party");
		//
		// 		if (!party_type || parties.length === 0 || parties.length > 1) {
		// 			frappe.query_report.set_filter_value("party_name", "");
		// 			frappe.query_report.set_filter_value("tax_id", "");
		// 			return;
		// 		} else {
		// 			var party = parties[0];
		// 			var fieldname = erpnext.utils.get_party_name(party_type) || "name";
		// 			frappe.db.get_value(party_type, party, fieldname, function (value) {
		// 				frappe.query_report.set_filter_value("party_name", value[fieldname]);
		// 			});
		//
		// 			if (party_type === "Customer" || party_type === "Supplier") {
		// 				frappe.db.get_value(party_type, party, "tax_id", function (value) {
		// 					frappe.query_report.set_filter_value("tax_id", value["tax_id"]);
		// 				});
		// 			}
		// 		}
		// 	},
		// },
		// {
		// 	fieldname: "party_name",
		// 	label: __("Party Name"),
		// 	fieldtype: "Data",
		// 	hidden: 1,
		// },
		// {
		// 	fieldname: "categorize_by",
		// 	label: __("Categorize by"),
		// 	fieldtype: "Select",
		// 	options: [
		// 		"",
		// 		{
		// 			label: __("Categorize by Voucher"),
		// 			value: "Categorize by Voucher",
		// 		},
		// 		{
		// 			label: __("Categorize by Voucher (Consolidated)"),
		// 			value: "Categorize by Voucher (Consolidated)",
		// 		},
		// 		{
		// 			label: __("Categorize by Account"),
		// 			value: "Categorize by Account",
		// 		},
		// 		{
		// 			label: __("Categorize by Party"),
		// 			value: "Categorize by Party",
		// 		},
		// 	],
		// 	default: "Categorize by Voucher (Consolidated)",
		// },
		// {
		// 	fieldname: "tax_id",
		// 	label: __("Tax Id"),
		// 	fieldtype: "Data",
		// 	hidden: 1,
		// },
		// {
		// 	fieldname: "presentation_currency",
		// 	label: __("Currency"),
		// 	fieldtype: "Select",
		// 	options: erpnext.get_presentation_currency_list(),
		// },
		// {
		// 	fieldname: "cost_center",
		// 	label: __("Cost Center"),
		// 	fieldtype: "MultiSelectList",
		// 	options: "Cost Center",
		// 	get_data: function (txt) {
		// 		return frappe.db.get_link_options("Cost Center", txt, {
		// 			company: frappe.query_report.get_filter_value("company"),
		// 		});
		// 	},
		// },
		// {
		// 	fieldname: "project",
		// 	label: __("Project"),
		// 	fieldtype: "MultiSelectList",
		// 	options: "Project",
		// 	get_data: function (txt) {
		// 		return frappe.db.get_link_options("Project", txt, {
		// 			company: frappe.query_report.get_filter_value("company"),
		// 		});
		// 	},
		// },
		// {
		// 	fieldname: "include_dimensions",
		// 	label: __("Consider Accounting Dimensions"),
		// 	fieldtype: "Check",
		// 	default: 1,
		// },
		// {
		// 	fieldname: "show_opening_entries",
		// 	label: __("Show Opening Entries"),
		// 	fieldtype: "Check",
		// },
		// {
		// 	fieldname: "include_default_book_entries",
		// 	label: __("Include Default FB Entries"),
		// 	fieldtype: "Check",
		// 	default: 1,
		// },
		// {
		// 	fieldname: "show_cancelled_entries",
		// 	label: __("Show Cancelled Entries"),
		// 	fieldtype: "Check",
		// },
		// {
		// 	fieldname: "show_net_values_in_party_account",
		// 	label: __("Show Net Values in Party Account"),
		// 	fieldtype: "Check",
		// },
		// {
		// 	fieldname: "show_amount_in_company_currency",
		// 	label: __("Show Credit / Debit in Company Currency"),
		// 	fieldtype: "Check",
		// },
		// {
		// 	fieldname: "add_values_in_transaction_currency",
		// 	label: __("Add Columns in Transaction Currency"),
		// 	fieldtype: "Check",
		// },
		// {
		// 	fieldname: "show_remarks",
		// 	label: __("Show Remarks"),
		// 	fieldtype: "Check",
		// },
		// {
		// 	fieldname: "ignore_err",
		// 	label: __("Ignore Exchange Rate Revaluation and Gain / Loss Journals"),
		// 	fieldtype: "Check",
		// },
		// {
		// 	fieldname: "ignore_cr_dr_notes",
		// 	label: __("Ignore System Generated Credit / Debit Notes"),
		// 	fieldtype: "Check",
		// },
	],
	collapsible_filters: true,
	seperate_check_filters: true,
};

// erpnext.utils.add_dimensions("General Ledger", 15);
