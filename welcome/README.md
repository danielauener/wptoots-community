# Welcome to wptoots.social

Hello wp-tooters! Some of you are new to Mastodon, so here are some notes to
help you get started. Since a fair few of you are coming from Twitter, there
will be comparisons to the Twitter model for social media.

## How do I sign up?

If you're looking to sign up with us here at wptoots.social, you can sign up on
[wptoots.social](https://wptoots.social). The only criteria for signing up is
abiding by our [wptoots.social Terms of Service](
https://wptoots.social/about/more). If you're looking at other Mastodon
instances, then the sign up process is likely similar but with their own domain
and Terms of Service.

## Respectful Tooting

### How do I access (public) posts?

There are a few different ways:

- The web browser, so in our case [wptoots.social](https://wptoots.social)
- A client app, usually for mobile devices:
  - iOS: [Toot!](https://apps.apple.com/us/app/toot/id1229021451) (cost: $4
    USD)
  - Android: [Tusky](
    https://play.google.com/store/apps/details?id=com.keylesspalace.tusky&hl=en_US&gl=US&pli=1)
    (cost: free)

For a complete comparison of 8 iOS apps: Fedi, Mast, Mastodon (official),
Mercury, Metatext, tooot, Toot!, and Tootle, please take a look at
[Transpondering's Blog]( https://transponderings.blog/2022/05/21/eight-mastodon-apps-for-iphone/)
on the topic. ([A Google Sheets of the same data](https://docs.google.com/spreadsheets/d/1De5KRwqMIdwEryfoeBLARgxF7QgKkeOQBCilKuIdAXE/edit#gid=0), 
made by GameDev Mastodon user [runevision](https://wptoots.social/web/@runevision@mastodon.gamedev.place).) The deep dive is very deep, going into various UI features, commenting about how intuitive the different apps are or aren't, which are
more or less compatible with screenreaders and VoiceOver, and so on.

### Who can see my content / Whose content can I see?

This diagram has been making rounds on Twitter, Mastodon, et al. It is from a
GitHub issue on the Mastodon project:

<img src="../assets/mastodon-post-visibility-flowchart.jpg"
     alt="Flow chart showing that a public post by USER is visible only if you
          are: following that user, the user is on the same instance as you, or
          someone on your instanced follows and interacted with the post"
     width="400" />

This is the case of _public_ posts only. When you are a private account, the
people you allow to follow you are the people who can see your posts.

### Who can see DMs? It depends.

Direct messages allow you to communicate with one or more other users. This is
similar to what you've likely seen on other platforms like Slack/Discord and
Twitter with a notable exception:

- ⚠️ **_When you bring someone into a DM conversation they are able to see the
  whole DM history._**

On the one hand this solves the problem of Slack and similar where when you add
someone to a conversation you need to summarize everything relevant to that
point to bring the new person / people up to speed. That said, if you aren't
expecting it, it can expose conversations to third parties that needed to be
private.

The other person / people who can see DMs are mods.

- **_Yes, mods_ can _see your DMs._**

Similar to the above, this is a double edged sword. On the one hand it makes it
easy for mods to read DMs when they receive a report of harassing behavior. On
the other hand it might also make private conversations visible that you wished
were kept private even in those circumstances.

<u>As a transparent statement</u>: wptoots.social mods and instance operators agree
to never read direct messages under any circumstances. Ever. A violation of
this agreement will result in a permanent ban from moderator and operator
privileges.

Proactively:

⚠️ DMs should be considered public data. ⚠️  
⚠️ DMs are transparent and accessible by instance owners. ⚠️  
⚠️ DMs can be queried directly from the database on the instance. ⚠️

### DM user experience in the various interfaces

The UI experience of DMs is not as clearly separated as other apps like
Twitter, Slack/Discord, et al. In the web UI, for example, DMs do not look
significantly different than a private account posting in your feed. Some of
the mobile apps, like Toot!, have a better visual separation. Basically:
depending on where you prefer to post, you'll have vastly different experiences
(for now).

## Content Warnings ⛔️

wptoots.social does not have a firm rule on content warnings. Use them as you
please. However we do offer some best practices for you to consider.

Content Warnings are implemented differently in Mastodon than Twitter. CW'ed
posts look like this:

<img src="../assets/mastodon-content-warning.png"
     alt="Screenshot of a post with content warning 'Politics (CO)' and the
          blurred out content labeled 'Sensitive Content'"
     width="400"/>

In this case the post has both text and associated graphic. You would need to
click to display each separately in each case. When a post has a CW, all posts
in the conversation carry that same CW.

Content Warnings have a few uses:

- If discussing topics that can cause distress or trigger PTSD, like a great
  many political situations
- Discussing topics that will spoil a book / movie / show

**_Because of how well CWs are implemented on the platform, we recommend that
people make use of them._**

It is far easier on the mental health of other users to opt into a discussion
about Whatever than to skim past it.

Also! Make sure that your CWs are _specific_ so users know whether they want to
opt in or not. e.g. are you hiding a post / image that depicts violence or
hints at it? Are you hiding the season finale to a show? How users socialize
their use of CWs is what makes them useful. Making heavy, unclear, use of CWs
adds confusion.

## Hashtags will help others see your posts

If you've tried to use the search function you've likely noticed that you
cannot use it _quite_ the same way as Twitter. You cannot search for a term and
find everyone writing about that word on your own or federated servers. What
_does_ show up are people and hashtags. You can take this information and do
with it what you will :) We do not recommend adding so many hashtags to your
posts that they are unreadable though.

<u>Accessibility Awareness</u>: when you camel case your hashtags (CamelCase)
then screenreaders can successfully read the text, but when you use all same
case (likethis or LIKETHIS) then they cannot. So if you're going to use
hashtags, please remember to \#UseCamelCase.

## Tooting Videos

Although you can upload videos to post, we recommend linking to a third party
service like Vimeo, TikTok, et al.

## Emojis 👍

Ok, so different instances have different emoji. Which emoji can you and others
see? Which can you use?

The emoji that are provided via your instance of Mastodon are the emoji set you
can use. You can use the Emojos app to see what emoji are available for you to
use. For example, the wptoots.social set is visible via
[emojos.in/wptoots.social](https://emojos.in/wptoots.social).

Mastodon will render emojis in use on other instances in your feed
correctly. Likewise users on other instances will see the special emoji you use
here on wptoots.social correctly, even if they do not have them on their own,
separate, instance.

One important note on our community-bagde emojis (everything :wp_\*:). All theses are
official wordpress.org badges, so only use the ones you have earned on you 
wordpress.org profile page. Everyone using bedges they are not entitled to will
be suspended.

# What to post?

So now that you've learned all of that, what _do_ you post? Well, you
might want to start by making an \#introduction post (tag intentional),
as it is very common to do across instances. The tag helps your post be
discoverable by others who are also new and looking for those who are
introducing themselves. Make sure to include anything you might want to
discuss with others as an interest, job, etc. You might want to avoid including
any non-discoverable PII (personally identifying information) / use your
normal internet security posture for responsible disclosure 😊

## Beyond the Introduction

After you've introduced yourself, we definitely recommend interacting
with other users and posting your own thoughts, opinions, opines, and more.

If you are making your own content / etc. you might want to promote that
too. If you are a corporate account or influencer account, please make
sure to read our information on those account types as well. The goal
here is to give people a space to promote original ideas, collaborate,
and more but to avoid repetitive content. We spell out what that means
for those account types.

# How to find Twitter people

On the Twitter model everyone you followed / were followed by were Twitter
users. As some have migrated over to Mastodon, they may all choose different
instances. So how do you try and find people? There are a few web apps that
try and find people from Twitter in the Fediverse. Note that for most (if not
all) you need to auth with your Twitter as it is trying to find your follows
specifically. A common tool is:

* [FediFinder](https://fedifinder.glitch.me/)

There are other tools beyond this and we will add more as we find them.

# Where to learn more stuff?

There is always the Mastodon documentation, as well as the
[Fedi.Tips](https://mstdn.social/@feditips) account that posts updated tips on
the regular.
