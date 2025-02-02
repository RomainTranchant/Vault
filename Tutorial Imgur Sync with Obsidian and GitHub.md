Obsidian stores all the data locally by design (which is perfect for text and, in my opinion, can be improved for images). If you often add pictures to your notes, your vault can quickly grow in size. Which in turn can lead to reaching limits if you use free plans of cloud storage services to sync your notes or can lead to growth of repository size if you use git to back up your notes.

This plugin is a perfect solution for people who paste images to their notes on daily basis (i.e. students making screenshots of lecture slides) and do not want to clutter their vaults with image files.

Having remote images also makes it much easier to share a note with anyone else, you will only need to share a single file.

You can also find the tutorial at this page: https://github.com/gavvvr/obsidian-imgur-plugin?tab=readme-ov-file#why
## Installation

Install the plugin via the [Community Plugins](https://help.obsidian.md/Advanced+topics/Third-party+plugins#Discover+and+install+community+plugins) tab within Obsidian
## Getting started

### Generating Client ID

For this plugin to work reliably and to avoid hitting [daily rate limits](https://github.com/gavvvr/obsidian-imgur-plugin?tab=readme-ov-file#known-limitations) from using single shared Client ID, it was decided that each user should create his own "Client ID". Here are the steps:

1. If you do not have an Imgur account, you need to get one first - follow [https://imgur.com/register](https://imgur.com/register)
2. Being authenticated, go to [https://api.imgur.com/oauth2/addclient](https://api.imgur.com/oauth2/addclient)
3. Use any name for "Application name". For example: "Obsidian Imgur plugin"
4. Choose "OAuth 2 authorization **with a callback URL**"
5. Important: use `obsidian://imgur-oauth` as an "Authorization callback URL" value
6. Fill in the "Email" field and proceed to get your Client ID

Configure just received Client ID in Obsidian Imgur plugin settings[1](https://github.com/gavvvr/obsidian-imgur-plugin?tab=readme-ov-file#user-content-fn-1-4c1b804662d397d24d7fdd9b0584f06f).

After creation, Client ID can be managed at: [https://imgur.com/account/settings/apps](https://imgur.com/account/settings/apps)

### Authenticated upload

[](https://github.com/gavvvr/obsidian-imgur-plugin?tab=readme-ov-file#authenticated-upload)

Go to plugin's settings, select 'Authenticated Imgur upload' and complete authentication. That's all! Now you are ready to make notes and upload all your images remotely. You will see all your uploaded images at [https://your_login.imgur.com/all/](https://your_login.imgur.com/all/)