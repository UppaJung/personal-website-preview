---
title: Before You Turn On Two-Factor Authentication…
date: 2018-08-15
---

Many online accounts allow you to supplement your password with a second form of identification, which can prevent some prevalent attacks. The _second factors_ you can use to identify yourself include authenticator apps on your phone, which generate codes that change every 30 seconds, and security keys, small pieces of hardware similar in size and shape to USB drives. Since innovations that can actually improve the security of your online accounts are rare, there has been a great deal of well-deserved enthusiasm for two-factor authentication (as well as for password managers, which make it easy to use a different random password for every one of your online accounts.) These are technologies more people should be using.

However, in trying to persuade users to adopt second factors, advocates sometimes forget to disclose that all security measures have trade-offs . As second factors reduce the risk of some attacks, they also introduce new risks. One risk is that you could be locked out of your account when you lose your second factor, which may be when you need it the most. Another is that if you expect second factors to protect you from those attacks that they can not prevent, you may become more vulnerable to the those attacks.

Before you require a second factor to login to your accounts, you should understand the risks, have a recovery plan for when you lose your second factor(s), and know the tricks attackers may use to defeat two-factor authentication.

I. The risks of requiring a second factor
=========================================

Technologists often assume that most people aren’t using two-factor authentication because using a second factor add extra work each time you login. They blame users for choosing convenience over safety, ignoring another explanation: that safety-conscious users are reluctant to change their security settings when the risks of doing so aren’t presented clearly. Let’s examine three risks that might make even rational, safety-conscious users reluctant to turn on two-factor authentication.

1\. You could lose access to your account
-----------------------------------------

If attackers cannot use a password alone to access your account without your second factor, you won’t be able to either. You may be unable to recovery your second factor if your security key, or the phone with your authenticator app, is lost, stolen, or broken. If your phone is only out of battery, left it at home, or lent to someone else, you may lose access for hours or days.

Those who dismiss being temporarily locked out of accounts as mere inconvenience ignore that timely access to some services can itself be important to user safety. For example, you may no longer remember the phone numbers of the close friends and family members you would want to contact in a time of crisis. You may rely on being able to get to your contacts via a web browser if you lose your phone. However, if you make your phone your second factor, you can no longer rely on being able to get to your contacts if you lose your phone — at least not without a backup second factor. You could be unable to reach your contacts if you are robbed, if you are in a car accident so severe that your phone breaks, or if you lose your phone while traveling alone.

Some websites, including GitHub, do not allow you to use a password-reset email to recover your account if you don’t also have your second factor. This further raises the importance of having a backup; if you don’t have a backup, losing your second factor can cause you to lose your account forever.

2\. Confidence in two-factor authentication could make you careless
-------------------------------------------------------------------

People behave less safely when they believe they are being kept safe by others: drivers who wouldn’t choose to wear seat-belts drive faster if forced to wear them and computer users who run anti-virus software are more likely to install risky software. Researchers have already shown that this principle also applies to two-factor authentication, [observing](https://www.ieee-security.org/TC/SP2011/PAPERS/2011/paper003.pdf) that users required to employ a second factor (a fingerprint in their study) chose weaker PINs (numeric passwords) than those who were not. If you believe that turning on two-factor authentication is a fool-proof way to protect your accounts, you may be more willing to login from a computer you don’t trust or more likely to risk installing software from an unknown or unfamiliar publisher.

3\. You may open up new opportunities for attackers
---------------------------------------------------

Changing how you sign into websites can also introduce new opportunities for attack. For example, consider the consequence of carrying a security key, which you plug into the USB slot of your computers at work and home. While these computers may be in relatively-safe private spaces, your key travels with you. Attackers might steal your security key when you are in a public place, such as when you are at a restaurant or coffee shop, and replace it with a lookalike.

If you plug an attacker’s lookalike device into your computer and allow it to install a driver, it can take control of your computer. From there, attackers can capture your password either by extracting it from your password manager or waiting for you to type it. With your security key and your password, the attacker can now login as you whenever and wherever they want.

II. You can reduce the risk of losing account access
====================================================

If you’ve been reluctant to turn on two-factor authentication out of fear of losing access to your account, there are steps you can take to make this less likely.

1\. Study what you will need to do if you lose your second factor
-----------------------------------------------------------------

Many organizations require their staff to use two-factor authentication for work accounts. Organizations like two-factor authentication because, unlike password managers, they can make it a login requirement for their accounts. Most websites that offer organizations the option to require two-factor authentication also allow your organizations’ technical support (IT) staff to help you reset your second factor if you lose it. A well-run IT department should provide clear instructions about who you can contact if you lose your second factor, what hours help will be available, and what form of proof they will require you to provide before they reset it for you. Make sure you can get to these instructions if you lose your phone. If your IT department doesn’t make these instructions easy to find when you’re locked out, you could store the instructions on a personal account that does not have two-factor authentication turned on.

For personal accounts, do not wait until you have lost your two-factor device to learn what you will be expected to do to regain access. Before requiring a second factor, pretend you have already lost it and are trying to recover. Examine the recovery workflows and help pages by searching phrases like “two factor lost my phone” or “two factor lost my security key” followed by the website name. These pages tend to be more forthcoming about the consequences of losing your second factor than the sign-up pages are.

For example, Google’s help page reveals that you will be unable to access your account until you can get to a computer that you have previously logged into with your second factor (see the figure below). If you cannot get to one and have to rely on customer support for help, you may not be able to access your account for days.

{{< figure src="google-recovery-form.webp" caption="A section of Google’s help pages for two-factor authentication users who have lost their phone, which is the first hit on searchers for “two factor lost my phone Google” and “two factor lost my security key Google”. Alas, this page doesn’t tell you if your recovery email address is, or is not, enough to reset your second factor. [https://support.google.com/accounts/answer/185834?hl=en](https://support.google.com/accounts/answer/185834?hl=en)">}}



2\. If using an authenticator app, consider backing up master secrets
---------------------------------------------------------------------

An authenticator stores a master secret (effectively a big random password) for each website and uses it to generate the shorter six-digit codes that you use to login. The six-digit codes change every 30 seconds and expire after 60 seconds, so they become useless to attackers if not used immediately. While the six-digit codes change every 30 seconds, the master secret does not change.

When you set up two-factor authentication for a website using an authenticator app on your phone, the website displays the master secret as a _QR code:_ a square with dots in it that can be read by your phone’s camera. You scan this code into your authenticator app by taking a picture of it. Many sites also display the master secret as 16 alphanumeric characters (effectively a long random password) you can type into your authenticator app.

If you lose your phone, you lose your master secrets. If you upgrade your phone you may also lose your master secrets. If you lose your master secrets, you will have to delete the old ones and create new ones. The more websites you use with your authenticator app, the more master secrets you will have to reset if you lose or upgrade your phone.

If you’re worried about losing your master secrets, you can use use an authenticator app that backs up these master secrets online. However, this introduces its own risks: those secrets have to be stored somewhere that you’ll have to authenticate to in order to get them back.

If you would like to keep your backups someplace safe offline, you _can_ make a copies of your master secret when you set up two-factor authentication — just print out the page with the QR code or write down the 16 characters next to the code. If you get a new authenticator app, all you have to do is scan QR code from the printout into the newly-installed authenticator app.

You can also take a picture of the QR code with a camera, phone, or tablet — just be sure not to use a device that may upload the image to someplace risky. If you have an old phone or tablet with a decent camera lying around gathering dust, turn off its network connectivity and turn it into storage for your master secrets, taking a photo of every QR code used to add a second-factor to your authenticator app. Like any backup, you won’t know it works unless you test it, so test it immediately. I recommend that every time you add two-factor authentication to a website, you take a picture of the QR code with your backup device first, then load the key into your phone’s authenticator app by scanning the QR code from your backup device. If you can’t scan the QR code from the backup device, you know the photo wasn’t good enough and that you need to take another.

Yet another option is to use two authenticator apps on two devices, which can serve as backups for each other: you can scan the same code into both devices at set-up time (caveat: you will need to replace both if one is compromised). If you trust a close friend or family member, you could have them scan the QR code into their authenticator apps — you may not be able to get the master secret back, but you can call them to provide a six-digit code for you in a pinch.

3\. Add more second factors
---------------------------

Most sites allow you to register multiple second factors, and require only one to login. Each second factor you add gives you one more option if you lose one, though each also gives attackers one more target to compromise.

Of the common options, SMS (text) messages is the weakest so adding it should be a last resort.

**Security keys** can be used as a backup second factor or as your everyday second factor. Most are designed to fit on a metal key ring, next to your car keys and house keys. When you need to authenticate, you press a button on the key. Attackers will likely have a harder time stealing data out of these devices than your phone, but they do not make you intrusion-proof; if you login to an account with a malware-infected browser, attackers can still take over your session and do whatever you could until it is logged out.¹

Security keys can be practical for everyday use if you only carry the same key ring and always travel in a car that won’t start without a key from that ring. However, they’re also easily left behind if you don’t normally carry a key ring or anything else to attach them to, or if you use a different key ring each morning (e.g., depending on which car your family members haven’t taken). You may also be likely to leave your security key unguarded against physical theft than your phone.

If you use a security key as your everyday second factor, you can still use an authenticator app for when you remember your phone but forget the key. (Just don’t let attackers trick you into using your authenticator app by showing a login page that says that you can’t use your security key or that yours isn’t working.)

Unfortunately, if carrying a security key isn’t practical for you and you use an authenticator app on an everyday basis, some websites will start hassling you use your security key once you have added it as a backup. For example, once you’ve registered a security key for your Google account, you will have to click a “having trouble” link before you can use your authenticator app. (Google wants to encourage users to choose security keys for everyday use, but by ignoring the needs of users who for whom this isn’t practical, they discourage the use of security keys as backups.)

{{< figure src="google-security-key.webp" caption="Want to keep a security key in your safe as a backup for your authenticator app? You’ll have to click “having trouble” every time you want to sign into your Google Account with the authenticator app.">}}


Regardless of whether you use a security key or an authenticator app as your everyday second factor, you can always add more security keys as backups — storing them in multiple locations so they’re easier to get to. Even if you won’t often carry your backup security key, you may want to attach it to a key ring or something larger to make it harder to lose.

Of course, each extra backup is another second factor that someone could steal. Keep a record of which security keys you’ve registered for each online account so that you can remember all the places you need to revoke them if their lost or stolen.

**Recovery codes** are random passwords that you can use only once to reset your second factor. Websites that offer security codes will send you a notification when one is used, to make you aware if someone else uses tries to use one without your knowledge. The notification is an improvement over printed QR codes, especially if you plan to carry recovery codes with you.

If you do carry codes with you, keep in mind that that recovery codes carried in your wallet may be lost with your phone — especially if you carry that wallet with your phone in the same purse, or if your phone case doubles as your wallet. Even if you keep your phone and recovery codes in separate pockets, you should expect to lose both if you are robbed.

One disadvantage of recovery codes is that if you use an authenticator app for 30 websites, and needed recovery codes for each, you would need to print and store 30 sets of recovery codes. If you lost your phone, you would then need to go to each of the 30 websites and follow a different set of instructions on each. This is much harder than just scanning in 30 QR codes.

{{< figure src="recovery-codes.webp" caption="Most sites overlook the consequences of losing a second factor during setup. GitHub has this nice exception.">}}


However, recovery codes do have some usability advantages over QR codes: they are relatively short, readable by human eyes, and writable by human hands. Unlike a QR code, you could use a sharpie to copy a recovery code for your most important account onto a pair of underwear.² Google and GitHub provide enough codes (10) to pack underwear for a one-week trip.

III. Know the limits of two-factor authentication
=================================================

If you understand the limitations of two-factor authentication, you can better protect yourself from attacks that exploit these limits. Let’s examine five attacks to understand which can be prevented by authenticator apps and security keys and which cannot be.

{{< figure src="benefits-limitations-table.webp" caption="The security benefits and limitations of two-factor authentication, using password managers as a baseline. Even the best-available second factors cannot protect you if your computer is infected by malware.">}}

1\. Capturing your password by breaching another website
--------------------------------------------------------

If you’re using the same password on multiple websites, attackers who compromise one website may be able to discover your account’s email address and password. This is a common attack because password breaches occur frequently and many users re-use passwords for multiple online accounts. Second factors provide protection against this attack because attackers will not be able to login to your account with just the breached password. However, if you’ve already used a password manager to assign a unique password for each of your web accounts, you are not vulnerable to this attack.

2\. Using replica websites to capture your password (AKA “Phishing”)
--------------------------------------------------------------------

Attackers may try to trick you into entering your password for a website into a replica of that website — one that they created. This attack is called _phishing_ because attackers usually use an email or other message as bait to lure you to the attackers’ replica of the website_._ For example, attackers might send an email that appears to be from Twitter, telling you that you need to update your Twitter password, with a link to the login page on their replica of the Twitter website. When you type your password into the replica website, the attackers read it and use it to login to the website as you.

Security keys are designed to prevent phishing. Even if attackers trick you into logging in on their replica website, capture your password, and trick you to press the button on your security key, they still cannot login as you.

However, **authenticator apps can not prevent phishing**. After mimicking the password-entry page, the replica website can also mimic the step where you enter the code from your authenticator app. With your password and that code, attackers can login as if they were you, so long as they do so before the code expires. An authenticator app will only prevent phishing if you refuse to type the code from your authenticator app into the replica website. The problem is, you need to provide a code whenever you enter your password, so you will likely provide it out of habit. If you think you are at the right website when you enter your password, there would be no additional reason to be suspicious when you are asked to provide the code from your authenticator app.

Aside from a security key, the best defense against phishing is to use a password manager that generates random passwords for you, stores them, and only enters them when you return to the same site. You can’t accidentally enter a password into the wrong site if you don’t even know the password. An attacker’s replica website might try to convince you to look up your password in your password manager and enter it manually, but once you start using a password manager, needing to type your password (rather than letting the manager do it for you) is suspicious. If carrying a security key with you on a daily basis is not practical, and you use an authenticator app as your everyday second factor, using a password manager as well can help protect you from phishing attacks.

3\. Taking control of your computer via malicious software
----------------------------------------------------------

Another way attackers might steal your password is to trick you into installing malicious software (_malware_) that gives them control of your computer. Once you login to your account on a computer that attackers control, they can start using your connection to the account in your place. They may even be able to change what you see to make you think you failed to login to your account while they’re using it. **Neither an authenticator app nor a security key can prevent an attacker who controls your computer from taking over once you login.**

While security keys are presented as superior to authenticator apps, if an attacker controls your computer and tricks you into pressing the login button on your key, they can use it for the account of their choice. With an authenticator app, you control which site you provide a code to login to.

4\. Using data from prior attacks to login again and again
----------------------------------------------------------

If an attacker has your password and you have not turned on two-factor authentication, attackers can login as you whenever they want — even when you’re offline. Authenticator apps and security keys are designed to prevent attackers from re-using your identity information for future logins.³ The time-based codes generated by your authenticator app expire within 60 seconds. Security keys use special hardware and cryptography to protect their master secrets, so that attackers who compromise your computer for a single login can’t login again unless your key is attached and you press the button.

In contrast, once your password is compromised, a password-manager cannot provide protection unless you are able to reset your password.

While second factors can limit attackers to a single login session, the security benefits are often overstated. Attackers may only need one login session to download all your data, destroy data you value, and use the service as you: issuing statements that could get you fired or sending messages to your contacts to compromise their accounts.

5\. Changing your security settings for long-term account access
----------------------------------------------------------------

Even if attackers can’t provide your second factor when you are absent, using a second factor does not guarantee they cannot gain long-term access to your account. One way for them to do so is to change your account’s security settings to add a second factor of their own.

Websites typically require you to provide your password and second factor again before changing your security settings. However, while security keys and authenticator apps allow you to control when you will prove who you are, you cannot control _what_ action you will be authorizing when you provide your second factor. **If an attacker tricks you into providing your second factor twice, they may be able to change your security settings** to add a second factor they control.

For example, attackers who have compromised your computer might make your login appear to take much longer than it actually does. While you wait, they can go to your security settings page and prepare to add a new second factor. When the website asks them to enter the second factor again, to authorize changing your security settings, the attacker can make it appear to you as if login failed and you need to try again. When you press the button on your security key or enter a second code from your authenticator app, thinking you are logging in, you are actually authorizing the change to your security settings. Since you cannot convey your intent via the button on your security key or the six-digit code from your authenticator app, the website cannot tell that you meant to login and not to change your security settings.

The lesson you should take away is that no second factor can protect you if you login to your accounts from a computer controlled by attackers. You should not let your trust in for two-factor authentication make you less cautious about installing software from publishers you don’t know and trust, as this could give attackers control of your computer. You should be cautious about giving the software you do install administrative access to your computer. You should avoid logging into your web accounts from computers on which it’s likely that others may have installed software that you would not have.

IV. Make an informed choice
===========================

Technologists have historically failed to evaluate the effectiveness of authentication requirements against all reasonable attacks, to disclose the shortcomings of these requirements, and to [account for](https://www.nspw.org/papers/2009/nspw2009-herley.pdf) and [acknowledge](http://discovery.ucl.ac.uk/20247/2/CACM%20FINAL.pdf) their negative impact on users. Examples of now-debunked security measures that were once widely-promoted include forcing users like you to reset your passwords every 90 days; to include uppercase letters, digits, and symbols in your passwords; to [answer questions about yourself to answer if you forget your password](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/oakland09.pdf); and to [create security images to verify a website before you enter your password.](http://www.usablesecurity.org/emperor/emperor.pdf)

Authenticator apps and security keys actually do provide security against some important attacks, but they have also been promoted without sufficient discussion of their risks and limitations. Journalists describe two-factor authentication as “The Security Setting You Must Always Turn On” (the title of a paywalled article at The Wall Street Journal) for “[any and all online services that offer it](https://www.cnet.com/how-to/how-to-move-google-authenticator-to-a-new-device/)” (CNET) and they even go so far as to claim that “[using every available method to protect your online data is a moral imperative](https://www.nytimes.com/2017/08/13/smarter-living/password-manager-two-factor-verification.html)” (The New York Times). Yet these journalists don’t know what data you have stored in each of your accounts, the consequences if you lost access to it, and the security measures you’re already taking to protect it.

You are also unlikely to see a full and complete disclosure of the risks of turning on two-factor authentication when you go to a website to do so; the teams building these security features are tasked with persuading you to use them, not scaring you away.

So what to do?
--------------

You may want to add second factors for some of the services that offer it, but not necessarily all of of them. Some websites that offer two-factor authentication also give you the option to login via your email account or social media account. If your email account is already protected by a second factor, you may best off logging into these sites via that email account. Why create a new account with yet another password and second factor to manage?

If you have information that’s critical to have access to in an emergency, such as a list of emergency contact numbers or medicines you’re allergic to, you may want to keep a copy in an account with no second factor, and with a password you will be able to remember without a password manager. This might also be a good place to store instructions for restoring access to your work accounts if that information is not easily found online.

For those accounts for which you will be adding a second factor, research the recovery process before doing so. If an online service does not provide enough information about their implementation of two-factor authentication, don’t be afraid to ask them to provide it and to make this information easier for others to find.

Create backup second factors to reduce the risk that you will later regret your decision to add a second factor. In addition to keeping copies for yourself, you may consider making a second factor accessible to someone you trust and whose phone number you have committed to memory.

If carrying a security key for everyday use isn’t practical for you and you opt to use an authenticator app, which does not protect against phishing, you may want to also use a password manager. In addition to providing a significant barrier to phishing attacks, it will also make it easier to login to websites and help to protect accounts that don’t offer second factors by generating different random passwords for each. (Keep in mind, however, that losing access to your password manager can be even more disruptive than losing access to your second factor.) If you use the free built-in password manager in Google’s Chrome browser or Apple’s Safari browser, you should take advantage of the features that generates random passwords for you.

Lastly, remember that a false sense of security can lead you to take risks you otherwise would not. You should continue to be careful about the security of the devices you use, as a second factor may not protect your online accounts if you login them from a compromised device.

**_Stuart Schechter_** _spent over a decade of scientific research rigorously testing authentication technologies and exposing their shortcomings. Research he contributed to has caused major websites to abandon security questions, site-authentication images, and password-composition policies.

_This article was greatly improved thanks to invaluable technical feedback from Lorrie Cranor (_[_@LorrieTweet_](https://twitter.com/lorrietweet)_), Cormac Herley (_[_@CormacHerley_](https://twitter.com/CormacHerley)_), Maritza Johnson (_[_@_maritza\_johnson](https://twitter.com/maritza_johnson)_),_ [_Jaeyeon Jung_](https://www.linkedin.com/in/jaeyeonjung/)_, and_ [_Bruce Schneier_](https://www.schneier.com/) _(_[@schneierblog](https://twitter.com/schneierblog)_), as well as proofreading and readability feedback from Keith Gaugler, Rufina Park, and Judy Schechter._

_Post-publication, thanks to_ [_John Levine_](https://medium.com/u/3114e360d09f?source=post_page-----27148cc5b9a1--------------------------------) _for pointing out in the comments that the master secrets for authenticator apps are often displayed as 16 alphanumeric characters in addition to QR codes._

¹See section 9 of the [U2F spec overview](https://fidoalliance.org/specs/fido-u2f-v1.2-ps-20170411/fido-u2f-overview-v1.2-ps-20170411.html).

² Copying a recovery code onto your underwear may be inadvisable if you (unlike me) think its more likely you will forget your underwear than your phone and wallet, are fashionable enough to care what’s written on them, don’t wash your own laundry (or don’t trust those who wash it for you), or get invited to the kinds of parties where these codes might be exposed to others (no judgments either way on any of these).

³An attacker who can observe you enter the codes for a website from your security app four times may be able to derive (“crack”) the master secret by trying all possible combinations. This is easier than it should be because authenticator apps use a relatively-short 80-bit symmetric key with the SHA1 hash. Four six-digit codes provide nearly 2⁸⁰ bits of hash output needed to uniquely identify the correct the master secret. (If attackers have only one code, they would identify 2⁶⁰ candidate master secrets that could have generated it. Having two codes would leave 2⁴⁰ candidate secrets and having three would leave 2²⁰ candidate secrets. With four codes there would be at most a couple of candidates that matched.)

To understand the cost to derive the master secret, consider that Bitcoin miners collectively do 2⁶⁵ calculations of the more-complex SHA256 hash every second. Computing 2⁸⁰ hashes at a rate of 2⁶⁵ hashes per second would take 2¹⁵ seconds (~9 hours).

While such a massive amount of hardware represents millions of dollars of computation, foreign intelligence agencies may consider regular access to certain accounts worth that cost.
