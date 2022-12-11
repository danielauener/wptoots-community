import React from "react";

import Layout from "../components/Layout";
import PageFooter from "../components/PageFooter";
import SideBar from "../components/SideBar";
import { Link } from "gatsby";

const sections = [
  { id: "top", name: "Join wptoots.social", icon: "fa-home" },
  { id: "welcome", name: "Mission & Tools", icon: "fa-road" },
  { id: "rules", name: "Rules & Account types", icon: "fa-check" },
  { id: "contributing", name: "Contributing & Issues", icon: "fa-star" },
  { id: "sponsoring", name: "Donations & Sponsoring", icon: "fa-heart" },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <a href="https://wptoots.social" className="button">
            Register on wptoots.social
          </a>
        </div>
      </section>

      <section id="welcome" className="two">
        <div className="container">
          <header>
            <h2>The wptoots.social Community</h2>
          </header>
          <p>
            Welcome to the community of the{" "}
            <a href="https://wptoots.social" target="_blank">
              wptoots.social Mastodon instance
            </a>
            , a group of decentralized, tooting WordPress enthusiasts. Here you
            will find information and resources on how we manage things on
            wptoots.social.
          </p>
          <header>
            <h3>Mission</h3>
          </header>
          <p>
            <i>
              We are trying to build a curated network of respectful WordPress
              enthusiasts around the globe. Welcome anyone who follows the rules
              and needs a safe home or fresh start.
              <br />
              We are developers, users, professionals, enthusiasts, and are
              passionate about WordPress in all its facets, digital freedom,
              educating, respectful discourse and making digital publishing
              better.
              <br />
              We believe that our diverse community thrives best in a safe
              space, where our content and thoughts aren't monitized, not only
              the loudest voices get heard and free software is the base
              everything is build on.
              <br />
            </i>
            <a href="https://wptoots.social/tags/WordPress" target="_blank">
              #WordPress
            </a>{" "}
            -{" "}
            <a href="https://wptoots.social/tags/FreeSoftware" target="_blank">
              #FreeSoftware
            </a>{" "}
            -{" "}
            <a href="https://wptoots.social/tags/Mastodon" target="_blank">
              #Mastodon
            </a>{" "}
            -{" "}
            <a href="https://wptoots.social/tags/fediverse" target="_blank">
              #fediverse
            </a>
          </p>
          <header>
            <h3>Tools for wp-tooters</h3>
          </header>
          <p>
            Make sure to check our status page:{" "}
            <a href="https://status.wptoots.social" target="_blank">
              status.wptoots.social
            </a>
            .
          </p>
          <p>
            If you are just starting out, please see the following{" "}
            <a href="/welcome/README.md" target="_blank">
              Welcome Guide
            </a>{" "}
            for Mastodon 101 and getting started. If you're wondering where
            everyone is, we curate a{" "}
            <a
              href="https://wp-community-on-mastodon.wptoots.social"
              target="_blank"
            >
              List of the WordPress Community on Mastodon
            </a>{" "}
            (on all instances).
          </p>
          <p>
            If you want to get some WordPress into your timeline, our{" "}
            <a href="https://wpbot.wptoots.social" target="_blank">
              @wpbot
            </a>{" "}
            might be a good place to start! Every source that it's publish from,
            has been checked for{" "}
            <i>
              credibility, community reputation, relevant content and tollerable
              posting frequency
            </i>
            .
          </p>
        </div>
      </section>

      <section id="rules" className="three">
        <div className="container">
          <header>
            <h2>Rules & Account Types</h2>
          </header>
          <p>
            See our{" "}
            <a href="https://wptoots.social/about/more#rules" target="_blank">
              official rules
            </a>
            . This is your first and final warning to take our rules seriously.
          </p>
          <header>
            <h3>Changing, modifying and deleting rules</h3>
          </header>
          <p>
            In general we try not to change our rules. If we do, we need to give
            the community time to understand the impact of the change and move
            away from our server if they chose.
          </p>
          <p>If you want to creating a new rule follow the folowing process:</p>
          <ol>
            <li>
              Draft the new rule. Write the "headline" and then write a few
              sentences to elaborate on the rule.
            </li>
            <li>Publish the draft (GitHub, HackMD, etc).</li>
            <li>
              Advertise the draft (This is similar to publishing an obituary or
              a name change in a newspaper). Our admins, mods, and leadership
              should all be encouraged to share the new change.
            </li>
            <li>
              Gain feedback, make adjustments, work with the community, hear
              concerns, give space for alternative opinions. Pause. Reflect.{" "}
            </li>
            <li>
              Make the decision to institute the new rule, and publish a "goes
              in effect" date.
            </li>
            <li>Institute the new rule.</li>
          </ol>
          <p>
            {" "}
            Only Daniel (@daniel@wptoots.social) can remove a rule at this time.
          </p>
          <header>
            <h3>Account Types</h3>
          </header>
          <p>
            We identify a few types of accounts, each with their specific set of
            requirements. Dependend on what account type you want to run it
            might be useful to read up on our{" "}
            <Link to="/account-types/">detailed account descriptions</Link>.
          </p>
          <header>
            <h4>Allowed Types</h4>
          </header>
          <p>
            Following account types are generally allowed if they follow the
            rules and the specific restriction for each account type.
          </p>
          <ul>
            <li>
              <Link to="/account-types/#general">General Accounts</Link>
            </li>
            <li>
              <Link to="/account-types/#open-source">Open Source Accounts</Link>
            </li>
            <li>
              <Link to="/account-types/#influencer">Influencer Accounts</Link>
            </li>
            <li>
              <Link to="/account-types/#corporate">Corporate Accounts</Link>
            </li>
            <li>
              <Link to="/account-types/#bots">Bot Accounts</Link>
            </li>
          </ul>
          <header>
            <h4>Disallowed Types</h4>
          </header>
          <p>
            The primary purpose of wptoots.social is to provide a place where
            WordPress (and adjacent) professionals to network. To be clear: this
            is not a "LinkedIn" type of instance. With that in mind we have a
            few account types that we explicitly do not allow:
          </p>
          <ul>
            <li>Fundraising Accounts</li>
            <li>
              Ad / Marketing Accounts, including promos, discount codes, etc.
            </li>
            <li>18+ / NSFW Accounts</li>
          </ul>
          <p>
            Our users may engage with the above types of content if they wish,
            we just aren't geared for supporting the above account types. An
            account will be considered one of the above if all / mostly all of
            their posts and re-posts are in the above categories.
          </p>
          <header>
            <h3>General policies</h3>
          </header>
          <p>
            Additional to account type and rules, using our instance, you will
            have to follow a set of guidlines. They apply in the somewhat fuzzy
            zone where a post or comment isn't clearly breaking the rules, but
            not clearly following them, either.
          </p>
          <ul>
            <li>
              <i>Don't be a dick</i>
              <br />
              We believe that everyone knows when they are "being a dick", and
              we do not tolerate this level of aggression towards our community.
              In short, we believe that you know if you are being a dick, and
              therefore you should be able to stop. If you do not stop, you will
              no longer be welcome on wptoots.social. Being a dick is measured
              by "self control" and "intent". <br />
              <br />
              Are you able to restrain yourself? What are your intentions?
              <br />
              If your intentions are to hurt, brandish, slander, diminish,
              insult, or offend someone you are likely being a dick. If you are
              commenting on anyone's "tone", whether or not they are "having a
              civilized" discussion, or offering apologetics in response to one
              or more of the various forms of extremism, you are <b>
                also
              </b>{" "}
              likely being a dick. We believe you should be able to restrain
              yourself in these situations. If you do not restrain yourself, we
              believe that you are likely being a dick. Being a dick is the
              opposite of respect. We believe all "bad takes" on a topic can be
              voiced with respect. We hold each member of the community
              accountable for managing themselves and finding a respectful way
              of communicating their contrarian views. We expect all members to
              be respectful and thus, not be a dick.
              <br />
              <br />
            </li>
            <li>
              <i>About "shitposting"</i>
              <br />
              Oxford dictionary defines shitposting as:{" "}
              <i>
                the activity of posting deliberately provocative or off-topic
                comments on social media, typically in order to upset others or
                distract from the main conversation.
              </i>{" "}
              In short shitposting is allowed on wptoots.social. However,
              shitposting can easily violate our "don't be a dick policy" if it
              turns into offensive trolling at the expense of others. The key
              factor in distinguishing between shitposting and being a dick is
              "at the expense of others". We don't want to be the "shitpost"
              police. We encourage you to shitpost, just not at the expense of
              others.
            </li>
          </ul>
          <header>
            <h3>Trolls, being targeted, and doxxing</h3>
          </header>
          <p>
            We understand there are nasty people on the internet, and we will do
            everything we can to protect our community from them. We ask that
            all community members respect our mission to remain peaceful, and
            deescalate in times of conflict. If ever there clearly is a targeted
            attack, doxxing attempt, troll, or otherwise aggressive situation on
            wptoots.social our advice is to report it and deescalate the
            situation. Do not engage. Do not respond.
          </p>
          <p>
            {" "}
            Our experience dealing with bad-actors, trolls, and aggressive
            accounts is that engagement is what they are looking for. Our
            primary weapon against them is a silent block (our mods are very
            responsive!) and moving on as if nothing happened. In the event this
            is not possible, we ask that you host your own infrastructure to
            forge such a counter maneuver against a group. Keep it off
            wptoots.social. We will remove any account who gains a reputation
            for "stirring the pot" or "engaging with conflict" on our site,
            despite how virtuous or noble the effort may be. wptoots.social is
            not the place for this.
          </p>

          <header>
            <h3>Moderation</h3>
          </header>
          <p>
            Our moderators are not the fediverse police. Your presence on
            wptoots.social should not become a burden to our moderators. We
            expect all community members to make our moderators jobs easier.
            <br />
            We expect everyone to understand that our moderators are volunteers
            who work tirelessly around the clock to keep deliberate bad-actors
            away from our community.
          </p>
          <p>
            We don't expect our moderators to also have to chase around our
            community members who are violating rules or need to be reminded of
            our policy. As a community member if you get on our moderators radar
            you are likely doing something very offensive.
          </p>
          <p>
            We believe in patience and understanding. There is a good chance
            that expectations have not been set or a policy has not been made
            clear. We will work with you to find a happy path, however if it
            becomes a pattern we will ask you to leave wptoots.social.
          </p>
          {/* <Link to="moderation">Moderator Documentation</Link> */}
        </div>
      </section>

      <section id="contributing" className="four">
        <div className="container">
          <header>
            <h2>Contributing and issues</h2>
          </header>
          <p>
            The wptoots.social community documentation is managed via the
            following git repo, where you are very welcome contribute:
            <br />{" "}
            <a
              href="https://github.com/danielauener/wptoots-community"
              target="_blank"
            >
              https://github.com/danielauener/wptoots-community
            </a>
          </p>
          <p>
            The most critical thing you can do to help us help you (even more so
            than a donation) is to{" "}
            <b>
              <i>reduce noise</i>
            </b>
            . The best way for you to help reduce noise is to leverage our issue
            tracker instead of independent one-off requests for help. It is a
            full time job sifting through requests and making sense of them. If
            you want to help, leverage the issue tracker and{" "}
            <a
              href="https://github.com/danielauener/wptoots-community/issues/new"
              target="_blank"
            >
              create a new issue
            </a>{" "}
            or better yet find one that already exists.
          </p>
          <header>
            <h3>Do not</h3>
          </header>
          <ul>
            <li>Please do not DM on Mastodon.</li>
            <li>Please do not reach out on Twitter.</li>
            <li>
              Please do not join the Discord just to report an issue, bug, or
              feature request.
            </li>
            <li>Please do not send us emails (we get too many emails).</li>
          </ul>
          <header>
            <h3>Do</h3>
          </header>
          <ul>
            <li>File an issue in the repository</li>
          </ul>
        </div>
      </section>

      <section id="sponsoring" className="three">
        <div className="container">
          <header>
            <h2>Donating & Sponsoring</h2>
          </header>
          <p>
            Your contribution to the hosting costs is much appreciated and
            provides economic security to the community. Feel free to contribute
            on a one-time basis or monthly.
          </p>
          <p>
            One-time donations can be easily made here: <br />
            <br />
            <a
              className="sponsor-link"
              target="_blank"
              href="https://www.buymeacoffee.com/wptoots"
            >
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy us a coffee&emoji=&slug=wptoots&button_colour=21759b&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00" />
            </a>
          </p>
          <p>
            Monthly sponsoring is possible via Patreon:
            <br />
            <br />
            <a
              className="button red"
              target="_blank"
              href="https://www.patreon.com/wptoots"
            >
              Become a Sponsor
            </a>
          </p>
          <header>
            <h3>What you are sponsoring</h3>
          </header>
          <p>
            All donations will be used to cover the costs of running
            wptoots.social. Mainly that means server costs.
          </p>
          <p>
            We follow the{" "}
            <a href="https://joinmastodon.org/covenant" target="_blank">
              Mastodon Server Covenant
            </a>{" "}
            . Do you want to know more about our infrastructure, data and server
            setup? There will be an Infrastructure Documentation soon, with the
            most relevant information.
          </p>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
