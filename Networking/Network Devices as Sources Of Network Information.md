# Network Devices as Sources of Network Information

![|900x1212](https://i.imgur.com/Rt3W3iK.png)

Some of these **show** commands would require privilege EXEC mode access.

As a security feature, the Cisco IOS software separates management access into two privilege level:

- **User EXEC Mode** - This is privilege level 1 and indicated by a device prompt ending with a greater than (**>**) symbol (e.g., Router> or Switch>). It provides access to limited commands useful to a technician when verifying the basic operation of a device.
- **Privileged EXEC Mode** – This is privilege level 15 and indicated by a prompt ending with a number (#) symbol (e.g., Router# or Switch#). It is the highest level available and should only be accessible by a network administrator. In this mode, all device commands are available including the ability to configure or change the configuration settings on the device. Use the **enable** command to enter the mode.

The Cisco IOS also provides command syntax check and context-sensitive help. If you enter a command incorrectly, the IOS will identify where you made an entry error.

Context-sensitive help enables the user quickly find answers to these questions:

- Which commands are available in each command mode?
- Which commands start with specific characters or group of characters?
- Which arguments and keywords are available to particular commands?

To access context-sensitive help, simply enter a question mark (**?**) while typing in a command. Cisco IOS also does not require the entire command, argument, or keyword to be entered. The partial command entry must just be long enough to uniquely identify the full command. For instance, you can use `en` instead of entering the full command enable.

To be sure the proper command is being entered, the tab key can also be used to complete the partial entry of a command, argument, or keyword.