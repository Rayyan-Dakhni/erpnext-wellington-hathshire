# Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt


# import frappe
from frappe.model.document import Document


class JournalEntryTemplateAccount(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		account: DF.Link
		debit_or_credit: DF.Literal["Debit", "Credit"]
		from_account: DF.Text | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		sub_account: DF.Literal["Admin fee", "Administration fee", "Broker fee", "Brokerage fee", "Brokerage fee 1", "Brokerage fee 2", "Cash", "Commitment fee", "Commitmnet fee", "Extension amount", "Extension fee", "Extension proceeds", "Feb 1 payment", "Feb payment", "First mortgage payout", "First mtg payment", "Francesca Bruno TFSA", "Fudns sent to lawyer", "Funds advacned to lawyer", "Funds advanced to lawyer", "Funds disbursed to client", "Funds received", "Funds received back", "Funds received from Olympia", "Funds sent to borrower", "Funds sent to lawyer", "Funds to lawyer", "Funds to payout first mortgage", "Funds transferred to 1077932", "Generoso Bruno TFSA", "Gianpiero Pisciotta TFSA", "Giovina Di Matteo TFSA", "Giulia Dippolito TFSA", "Helio Veiga RRSP", "Ian Shoub RRSP", "Ian Shoub TFSA", "Insurance", "Investment account 1", "Investment account 2", "Iuliu Szabo TFSA", "Jan payment", "Janety Santeramo TFSA", "Janice Genova TFSA", "Jill Hernandez RRSP", "John Simmen (RRSP)", "Jordan Applebaum RRSP", "Karin Schuster TFSA", "Kim Pak (Non-registered)", "Krysia Mussakowski TFSA", "Ksenia Kotova part 1", "Ksenia Kotova part 2", "Legal fee", "Lena Bellissimo RRIF", "Linda Simmen (Non-registered)", "LIRA", "Lorenzo Bellissimo RRIF", "Lucia Di Matteo RRSP", "Luigi Dippolito TFSA", "Mariya Iqbal TFSA", "Mark Dominichiello", "Matthew Genova RRSP", "Matthew Gneova TFSA", "Maya Dominelli", "Melissa Rubinoff TFSA", "Moraven Consulting Inc.", "Neelam Sharma RRSP", "Nita Jobanputra LIRA", "Nita Jobanputra RRSP", "Originaiton fee", "Origination fee", "Other", "Outstanding payments on first", "Part 1", "Part 2", "Part 3", "Part 4", "Per diem", "Peter Guido RRSP", "Prepaid interest", "Prepaid interest on first", "Prepaid interest on second", "Principal", "Principal for 225 Milestone", "Principal for 45 Wellington", "Principal funds received", "Principal paydown", "Principal paydown received", "Proceeds advanced to lawyer", "Proceeds disbrused to lawyer", "Professional Fees", "Purushottam Sharma RRSP", "Purushottam Sharma TFSA", "Rachel Rubinoff TFSA", "Renewal fee", "Retainer disbursed", "Retainer received", "Retainer recevied", "Retainer sent", "Retainer sent to lawyer", "Retiner received", "Revenue", "Robert Kerzner TFSA", "RRSP", "Samantha Kerzner FHSA", "Samantha Kerzner TFSA", "Sanjay Jobanputra RRSP", "Sean O'Leary TFSA", "Shauna Merkur TFSA", "Shrimati Naipaul TFSA", "Sita Naipaul (non registered)", "Sita Naipaul (personal)", "Sita Naipaul TFSA", "Steven Bellissimo TFSA", "Sydney kerzner TFSA", "Teresa Luchetta (personal)", "Third party insurance", "Total extension amount", "Total funds sent to lawyer", "Tracy Coutu RRSP", "Transferred to 1077932", "Veronica Astone TFSA", "Victor Biderman (RRIF)", "Viggolupo", "Viggolupo (Anna Maria)", "Vince Genova TFSA", "Vivian Di Matteo TFSA"]
		to_account: DF.Text | None
	# end: auto-generated types

	pass
