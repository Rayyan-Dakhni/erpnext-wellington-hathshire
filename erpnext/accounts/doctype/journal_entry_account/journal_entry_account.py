# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors and contributors
# For license information, please see license.txt


from frappe.model.document import Document


class JournalEntryAccount(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		account: DF.Link
		account_currency: DF.Link | None
		account_type: DF.Data | None
		advance_voucher_no: DF.DynamicLink | None
		advance_voucher_type: DF.Link | None
		against_account: DF.Text | None
		bank_account: DF.Link | None
		cost_center: DF.Link | None
		credit: DF.Currency
		credit_in_account_currency: DF.Currency
		date: DF.Date | None
		debit: DF.Currency
		debit_copy: DF.Currency
		debit_in_account_currency: DF.Currency
		exchange_rate: DF.Float
		from_account: DF.Text | None
		is_advance: DF.Literal["No", "Yes"]
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		party: DF.DynamicLink | None
		party_type: DF.Link | None
		project: DF.Link | None
		reference_detail_no: DF.Data | None
		reference_due_date: DF.Date | None
		reference_name: DF.DynamicLink | None
		reference_type: DF.Literal["", "Sales Invoice", "Purchase Invoice", "Journal Entry", "Sales Order", "Purchase Order", "Expense Claim", "Asset", "Loan", "Payroll Entry", "Employee Advance", "Exchange Rate Revaluation", "Invoice Discounting", "Fees", "Full and Final Statement", "Payment Entry"]
		sub_account: DF.Literal["Admin fee", "Administration fee", "Broker fee", "Brokerage fee", "Brokerage fee 1", "Brokerage fee 2", "Cash", "Commitment fee", "Commitmnet fee", "Extension amount", "Extension fee", "Extension proceeds", "Feb 1 payment", "Feb payment", "First mortgage payout", "First mtg payment", "Francesca Bruno TFSA", "Fudns sent to lawyer", "Funds advacned to lawyer", "Funds advanced to lawyer", "Funds disbursed to client", "Funds received", "Funds received back", "Funds received from Olympia", "Funds sent to borrower", "Funds sent to lawyer", "Funds to lawyer", "Funds to payout first mortgage", "Funds transferred to 1077932", "Generoso Bruno TFSA", "Gianpiero Pisciotta TFSA", "Giovina Di Matteo TFSA", "Giulia Dippolito TFSA", "Helio Veiga RRSP", "Ian Shoub RRSP", "Ian Shoub TFSA", "Insurance", "Investment account 1", "Investment account 2", "Iuliu Szabo TFSA", "Jan payment", "Janety Santeramo TFSA", "Janice Genova TFSA", "Jill Hernandez RRSP", "John Simmen (RRSP)", "Jordan Applebaum RRSP", "Karin Schuster TFSA", "Kim Pak (Non-registered)", "Krysia Mussakowski TFSA", "Ksenia Kotova part 1", "Ksenia Kotova part 2", "Legal fee", "Lena Bellissimo RRIF", "Linda Simmen (Non-registered)", "LIRA", "Lorenzo Bellissimo RRIF", "Lucia Di Matteo RRSP", "Luigi Dippolito TFSA", "Mariya Iqbal TFSA", "Mark Dominichiello", "Matthew Genova RRSP", "Matthew Gneova TFSA", "Maya Dominelli", "Melissa Rubinoff TFSA", "Moraven Consulting Inc.", "Neelam Sharma RRSP", "Nita Jobanputra LIRA", "Nita Jobanputra RRSP", "Originaiton fee", "Origination fee", "Other", "Outstanding payments on first", "Part 1", "Part 2", "Part 3", "Part 4", "Per diem", "Peter Guido RRSP", "Prepaid interest", "Prepaid interest on first", "Prepaid interest on second", "Principal", "Principal for 225 Milestone", "Principal for 45 Wellington", "Principal funds received", "Principal paydown", "Principal paydown received", "Proceeds advanced to lawyer", "Proceeds disbrused to lawyer", "Professional Fees", "Purushottam Sharma RRSP", "Purushottam Sharma TFSA", "Rachel Rubinoff TFSA", "Renewal fee", "Retainer disbursed", "Retainer received", "Retainer recevied", "Retainer sent", "Retainer sent to lawyer", "Retiner received", "Revenue", "Robert Kerzner TFSA", "RRSP", "Samantha Kerzner FHSA", "Samantha Kerzner TFSA", "Sanjay Jobanputra RRSP", "Sean O'Leary TFSA", "Shauna Merkur TFSA", "Shrimati Naipaul TFSA", "Sita Naipaul (non registered)", "Sita Naipaul (personal)", "Sita Naipaul TFSA", "Steven Bellissimo TFSA", "Sydney kerzner TFSA", "Teresa Luchetta (personal)", "Third party insurance", "Total extension amount", "Total funds sent to lawyer", "Tracy Coutu RRSP", "Transferred to 1077932", "Veronica Astone TFSA", "Victor Biderman (RRIF)", "Viggolupo", "Viggolupo (Anna Maria)", "Vince Genova TFSA", "Vivian Di Matteo TFSA"]
		to_account: DF.Text | None
		user_remark: DF.SmallText | None
	# end: auto-generated types

	pass
