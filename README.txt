=== Wired Impact Volunteer Management ===
Contributors: wiredimpact
Tags: nonprofits, non profits, not-for-profit, volunteers, volunteer
Requires at least: 4.0
Tested up to: 4.5
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A free, easy way to manage your nonprofit's volunteers.

== Description ==

A simple, free way to keep track of your nonprofit's volunteers and opportunities.

**How can the Wired Impact Volunteer Management plugin help your nonprofit?**

* **Post one-time and flexible volunteer opportunities on your website –** Promote volunteer opportunities on any page of your website using a simple shortcode.
* **Volunteers can sign up directly on your website –** Make volunteering even easier for your supporters by giving them the option to sign up for an opportunity directly on your website. A confirmation email will be sent to you and the volunteer once they sign up. 
* **Control the number of sign-ups available for opportunities –** Only need 10 people to help out at an event? Set a cap on the number of people who can sign up. Want as many volunteers as you can get? No problem. You don’t have to set a cap.
* **Send reminder emails anytime –** Schedule an automated reminder email three days in advance or send even hours before the opportunity for last-minute details.
* **Volunteer profiles that track participation and more –** Keep track of all of your volunteers’ involvement. See what they’ve helped out with, how long they’ve been helping and add notes that will help you stay organized.

*Thanks to [Habitat for Humanity East Bay/Silicon Valley](http://www.habitatebsv.org/) for being an awesome client and letting us use the photo above.*

== Installation ==

**How do I install the plugin?**

This is the easiest way to install the Wired Impact Volunteer Management plugin:

1.	In the WordPress backend, go to Plugins >> Add New
1.	Search for “Wired Impact Volunteer Management”
1.	Click “Install”

If this doesn’t work, follow these steps:

1.	Download the Wired Impact Volunteer Management plugin
1.	Unzip the files
1.	Upload the wired-impact-volunteer-management folder to the /wp-content/plugins directory of your website
1.	Activate the Wired Impact Volunteer Management plugin through the “Plugins” menu in WordPress

== Frequently Asked Questions ==

= How do you get started? =

Once you’ve downloaded the plugin, you’ll want to adjust the settings to fit your specific needs. You can do this by visiting the Volunteer Management menu and clicking “Help & Settings”. Here, you can choose to include our styles, set a default contact and location for volunteer opportunities, and create a template for your confirmation and reminder emails.

= How do you create a new volunteer opportunity? =

1.	In the Volunteer Management menu, click “Opportunities” 
1.	On the Opportunities page, click “Add Volunteer Opportunity”
1.	Fill in all of the information fields
1.	Click the blue “Publish” button
1.	To display the opportunities on your website, you’ll need to include the following shortcodes in the page content (Visual Editor): [one_time_volunteer_opps] (for one-time opportunities), [flexible_volunteer_opps] (for flexible opportunities)

It’s important to note, you can’t post both types of opportunities on the same page. Please list only one of the shortcodes on each page.

= What is the difference between the two types of opportunities? = 

One-time volunteer opportunities happen at a fixed date and time. One example might be a yearly trivia night fundraiser.

Flexible volunteer opportunities can happen on different days and times. One example might be weekly tutoring. Another example could be looking for a volunteer to help with your social media or blog.

= How do I add a volunteer to our database? =

You can’t manually add a volunteer to the database. Volunteers appear in the database after signing up for an opportunity.

= How do I add notes about a volunteer? =

1.	In the Volunteer Management menu, click “Volunteers” 
1.	Click the name of the volunteer you’d like to add a note about 
1.	Click “Edit Volunteer Info”
1.	Scroll to the bottom of the page to the Notes section 
1.	Add or edit any notes
1.	Click “Update User” to save any changes

= How do I remove a volunteer from a specific opportunity? =

If a volunteer is no longer able to help out at a specific opportunity, you can remove them from the sign up list. 

1.	Click “Opportunities” from the Volunteer Management menu
1.	Find the opportunity you need to remove the volunteer from 
1.	Click the opportunity to edit 
1.	Scroll down to the RSVP list, find the volunteers name and click “Remove RSVP”
1.	Confirm their removal by clicking the blue “Remove RSVP” button

= How do I create a recurring opportunity? =

If you have a recurring opportunity where different people will sign up each time, we recommend creating a one-time opportunity for each date and time. That will allow you to track the RSVPs separately.

If the recurring opportunity will have the same volunteers each time, we’d recommend you create one flexible volunteer opportunity.

== Screenshots ==

1. Advertise Volunteer Opportunities More Easily
1. Make Signing Up to Volunteer Simple
1. Control the Number of Volunteers Needed
1. Send Customized Reminder Emails
1. View Volunteer Profiles

== Changelog ==

= 1.0.4 =
* Added additional arguments to one hook and one filter for further custom development flexibility.

= 1.0.3 =
* Fixed bug where all users were shown in the volunteer list if no RSVPs had taken place.
* Adjusted plugin permissions for clearer and easier editing for different WordPress user roles.
* Tested up to WordPress 4.5.

= 1.0.2 =
* Fixed bug where some users were not being included in the volunteers list view when they should be.

= 1.0.1 =
* Fixed issue where template override directory was changed to match text domain.

= 1.0 =
* Tested and confirmed as stable version 1.0 release.
* Set up Google Analytics event tracking when someone RSVPs for a volunteer opportunity.

= 0.5.1 =
* Improved subject and body error messages for sending custom emails.
* Separated opportunity styling and form messages from certain classes, increasing compatibility with themes.

= 0.5.0 =
* Added ability to send custom emails to volunteers registered for an opportunity.
* Added new meta box to display the list of all emails sent to volunteers.
* Bugfix: Replace deprecated update_usermeta function with update_user_meta.

= 0.4.2 =
* Updated plugin to allow for translation

= 0.4.1 =
* Added ability to filter different opportunity types in the WordPress admin.
* Added ability to sort the opportunities by date in the WordPress admin.
* Tested up to WordPress 4.4.

= 0.3.1 =
* Made individual volunteer view responsive so it shows correctly on all device widths.
* Adjusted system used to add new settings in the future.

= 0.2.1 =
* Bugfix: Fix issue where admin notice would show again after the settings were changed.

= 0.2 =
* Show admin notice when plugin is activated directing people to tips on how to get started.
* Adjust how templates are loaded for a single volunteer opportunity to improve theme compatibility.

= 0.1 =
* Initial release.