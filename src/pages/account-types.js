import React from "react";

import Layout from "../components/Layout";
import PageFooter from "../components/PageFooter";
import SideBar from "../components/SideBar";

const sections = [
  { id: "back", name: "Back", icon: "fa-arrow-left" },
  { id: "general", name: "General Accounts", icon: "fa-user" },
  { id: "open-source", name: "Open Source Accounts", icon: "fa-code" },
  { id: "influencer", name: "Influencer Accounts", icon: "fa-star" },
  { id: "corporate", name: "Corporate Accounts", icon: "fa-building" },
  { id: "bots", name: "Bot Accounts", icon: "fa-qrcode" },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="general" className="two">
        <div className="container">
          <header>
            <h2>Account Types on wptoots.social</h2>
          </header>
          <p>
            We distinguish between 4 main types of accounts that we use to
            measure and moderate here on wptoots.social. Based on the type of
            account, we have various policies and best practices.
          </p>
          <header>
            <h3>Accounts in General</h3>
          </header>
          <p>
            If you are unsure what type of account you are, start with the
            general account FAQ.
          </p>
          <header>
            <h4>Frequently Asked Questions</h4>
          </header>
          <p>
            <ul>
              <li>
                <i>
                  <b>Can I post about my company?</b>
                </i>
                <br />
                Yes. Posting about your company is different from a corporate
                account. Feel free to say whatever you want about your company.
              </li>
              <li>
                <i>
                  <b>Can I post about my project?</b>
                </i>
                <br />
                Yes. Posting about your project is different from an open source
                account. Feel free to say whatever you want about your project.
              </li>
              <li>
                <i>
                  <b>Can I create a bot account?</b>
                </i>
                <br />
                Not without working directly with the moderators.
              </li>
              <li>
                <i>
                  <b>Can I create an anonymous account?</b>
                </i>
                <br />
                Yes. However, we do not want a single person to operate a high
                number of accounts. We understand the importance of being
                anonymous from a security, gender, safety, and mental health
                perspective.
              </li>
              <li>
                <i>
                  <b>Can I create multiple accounts?</b>
                </i>
                <br />
                Yes. Within reason. We expect you to use your best judgement in
                not flooding our servers. We understand you might need more than
                one account. However, it is not a free for all. We understand
                security, gender, safety, and mental health, and safe space from
                work are all reasons to create multiple and anonymous accounts.
              </li>
              <li>
                <i>
                  <b>
                    Can I create accounts for pets, characters, or imaginary
                    friends?
                  </b>
                </i>
                <br />
                We prefer if you didn't. We are trying to build a curated
                network of professionals on wptoots.social and would encourage
                you to move these accounts to another instance.
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section id="open-source" className="three">
        <div className="container">
          <header>
            <h2>Open Source Project Accounts</h2>
          </header>
          <p>
            This section is for anyone who is interested in creating an account
            specifically for an open source project. If you are a maintainer of
            a project, or are representing yourself this page does not apply to
            you.
          </p>
          <p>
            For example, our @wpbot is an Open Source project and our admin is
            the maintainer. This documentation only applies to a maintainer if
            they were attempting to create a 2nd account in addition to a
            primary personal account that would be specifically for "@wpbot".
            This documentation does not apply to the personal account where they
            would be free to talk about the @wpbot as they wish.
          </p>
          <p>
            We welcome open source and collaborate projects to create accounts
            on wptoots.social. We have a few exceptions for projects that
            operate in a financially biased market or projects that are
            extensions of, or resemble corporations.
          </p>
          <header>
            <h3>Understanding Open Source Projects</h3>
          </header>
          <p>
            The following are the types of projects that are welcome to come and
            go from wptoots.social as they please.
          </p>
          <p>
            <span class="icon fa-check">
              {" "}
              Influencer AccountsOpen source software projects with MIT, Apache
              2.0, GPL, Creative Commons or similar licenses.
            </span>
            <br />
            <span class="icon fa-check">
              {" "}
              Open collaborative projects such as{" "}
              <a href="https://www.gutenberg.org/" target="_blank">
                The Gutenberg Project
              </a>{" "}
              or collaborative wiki style projects like{" "}
              <a href="https://wikipedia.org/" target="_blank">
                Wikipedia
              </a>
              .
            </span>
            <br />
            <span class="icon fa-check">
              {" "}
              Community driven events, open organizations, and volunteer driven
              events like{" "}
              <a href="https://fosdem.org/" target="_blank">
                FOSDEM
              </a>
              .
            </span>
            <br />
            <span class="icon fa-check">
              {" "}
              Open source organizations such as{" "}
              <a href="https://matrix.org" target="_blank">
                Matrix
              </a>
              .
            </span>
          </p>
          <p>
            Unfortunately we are unable to support projects that are active
            participants in financially biased markets, or products that are
            extension of a single corporation.
          </p>
          <p>
            We will treat all corporation-specific projects as the parent
            corporation itself which is bound to the{" "}
            <a href="#corporate">corporate accounts</a> documentation.
          </p>
          <p>
            <span class="icon fa-remove">
              {" "}
              Financially biased trade organizations and governing bodies such
              as the{" "}
              <a href="https://www.cncf.io/about/join/" target="_blank">
                CNCF
              </a>{" "}
              or{" "}
              <a
                href="https://www.cloudfoundry.org/membership/"
                target="_blank"
              >
                Cloud Foundry
              </a>{" "}
              or their subsequent projects such as{" "}
              <a href="https://www.cncf.io/projects/istio/" target="_blank">
                Istio
              </a>{" "}
              or{" "}
              <a href="https://www.cncf.io/projects/helm/" target="_blank">
                Helm
              </a>
              .
            </span>
            <br />
            <span class="icon fa-remove">
              {" "}
              Open source projects with a single corporate sponsor/owners such
              as Google's{" "}
              <a href="https://go.dev/" target="_blank">
                Go Programming language
              </a>{" "}
              and HashiCorp's{" "}
              <a href="https://www.terraform.io/" target="_blank">
                Terraform
              </a>
              .
            </span>
            <br />
            <span class="icon fa-remove">
              {" "}
              Open source projects with structured sponsorship models that
              resemble paid services. For example features that are unlocked via
              donation such as{" "}
              <a href="https://letsencrypt.org/sponsors/" target="_blank">
                LetsEncrypt
              </a>
              's quota limit which can only be raised via donation.
            </span>
            <br />
            <span class="icon fa-remove">
              {" "}
              "up-sell" or "upgrade to pro" or "free trial" model projects that
              resemble a paid service such as{" "}
              <a href="https://www.pfsense.org/download/" target="_blank">
                pfSense Community Edition
              </a>{" "}
              or{" "}
              <a href="https://www.wolfram.com/open-materials/" target="_blank">
                Wolfram Alpha
              </a>
              .
            </span>
          </p>
          <header>
            <h3>What Is Financial Bias?</h3>
          </header>
          <p>
            Financial bias is defined as "the ability for a specific vendor,
            project, or organization to pay for a competitive advantage" or
            sometimes referred to as "pay-to-play" vendor spaces. Many vendor
            markets exist today which allow for wealthier vendors to pay for
            higher and more attractive sponsorship models that other vendors
            cannot afford.
          </p>
          <p>
            We believe that expensive sponsorship models that promise a higher
            return of investment with regard to product marketing create an
            unfair disadvantage for small businesses. We believe a level playing
            field for small businesses is critical for the sustainability of
            future generations in tech. We cannot condone a financially biased
            governance model in our community.
          </p>
          <header>
            <h3>Frequently Asked Questions</h3>
          </header>
          <p>
            <ul>
              <li>
                <i>
                  <b>Can I create an account for my event? Like Devopsdays?</b>
                </i>
                <br />
                Yes. As long as your event is not a profit focused event you are
                welcome to create an account. If your event is profit seeking,
                you must follow our{" "}
                <a href="#corporate">corporate account policy</a>.
              </li>
              <li>
                <i>
                  <b>What about Devopsdays for my specific city?</b>
                </i>
                <br />
                Yes. As long as your subsidiary account isn't repeating the same
                content as the parent account. We expect each account to have
                relatively independent content.
              </li>
              <li>
                <i>
                  <b>Can I create a support/help/fan/parody account?</b>
                </i>
                <br />
                No. Accounts like "Linux Tips" or "Kubernetes Memes" are not in
                alignment with our mission to create a curated group of
                professionals. We aim to have accounts that represent real
                people.
              </li>
              <li>
                <i>
                  <b>
                    Can I create an account if a similar one already exists?
                  </b>
                </i>
                <br />
                No. We want to have one account for each project. We do not want
                to have "Wikipedia tips" and "Wikipedia facts" as separate
                accounts. We think that collaboration of the same account should
                be shared at the project level. You should join the project and
                ask for access to the Mastodon account.
              </li>
              <li>
                <i>
                  <b>Can I create a bot account for our open source project?</b>
                </i>
                <br />
                No. We know its fun to automate pull requests, build status, and
                more. However we try to keep our content based around real words
                written by real people.
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section id="influencer" className="two">
        <div className="container">
          <header>
            <h2>Influencer Accounts</h2>
          </header>
          <p>
            In short, we welcome all influencers and have an open door policy to
            any large influencer account who would like to make wptoots.social a
            home.
          </p>
          <header>
            <h3>Large Following Accounts</h3>
          </header>
          <p>
            In case accounts with a large following join our instance, that
            could cause an unexpected rise in traffic and slowing our service
            down temporarily. While we do our best not to let an abrupt traffic
            spike influence our site, we also want to provide a speedy and
            non-laggy experience for our users.
          </p>
          <p>
            As a rule if you have more than 25k followers on an existing
            platform we ask that you reach out to us{" "}
            <a href="https://wptoots.social/about/more" target="_blank">
              directly
            </a>
            , shortly before announcing your transition.
          </p>
          <header>
            <h3>Self Promotion</h3>
          </header>
          <p>
            We believe that all influencers should be free to promote their
            brand and their content on our site, however we have a high bar with
            regard to product marketing. We draw the line between "personal
            brand" and "corporate account". In short if you are representing
            yourself you should be fine to self promote on wptoots.social.
          </p>
        </div>
      </section>
      <section id="corporate" className="four">
        <div className="container">
          <header>
            <h2>Corporate Accounts</h2>
          </header>
          <p>
            The simplest way to determine if an account is a corporate account
            or not is to ask yourself if the entity that the account represents
            is trying to make a profit or not. Chances are, if the entity is
            seeking profit, we are dealing with a corporate account. <br />
            In other words if you intend to create an account for a business,
            you should read this document because this document is exclusively
            for people like you.
          </p>
          <p>
            The WordPress Community is a diverse community and has always
            included individuals and corporations of all sizes, both valuably
            contributing. That's why we generally permit corporation accounts.
            However, it must be clear, that we expect you as coorporation to set
            the bar for what it means to be a wp-tooter, and the rules apply
            extra to you. By creating a corporation account, you agree to the
            following covenant.
          </p>

          <header>
            <h3>Coorporate Covenant</h3>
          </header>
          <ul>
            <li>
              <b>
                <i>Self-identification</i>
              </b>
              <br />I aggree to self-identify my corporate account by placing
              the full legal corporation name as the display name.
            </li>
            <li>
              <b>
                <i>Strict following of the Rules</i>
              </b>{" "}
              <br />I agree to be a steward and role model in the wptoots.social
              community. I understand that my presence as a corporation implies
              the rules will be more strictly applied to me than normal
              accounts.
            </li>
            <li>
              <b>
                <i>Being the Corporation You Want To Work With</i>
              </b>{" "}
              <br />I agree to build a market that I would want to shop at. I
              agree to set the bar for having world-class corporate engagement
              on wptoots.social. That might include telling the community about
              my product, but not to use the community for structured product
              marketing.
            </li>
            <li>
              <b>
                <i>Say It Once policy</i>
              </b>{" "}
              <br />I agree to share new content and do my best to prevent
              repetitive content. I understand that words can be changed but
              messaging can remain consistent. I agree to only share my message
              once.
            </li>
            <li>
              <b>
                <i>Use your own words policy</i>
              </b>{" "}
              <br />
              The best practice is to research the most reliable sources on the
              topic and summarize what they say in your own words.
            </li>
            <li>
              <b>
                <i>Community first policy</i>
              </b>{" "}
              <br />I understand that policies are difficult to enforce. If it
              is made obvious to me that wptoots.social is no longer benefiting
              from my presence I will politely step down as a corporate account
              and move to another server.
            </li>
            <li>
              <b>
                <i>Mods are no Product Marketing Police</i>
              </b>{" "}
              <br />I understand that it is my job to self-moderate. If
              moderation from wptoots.social is involved we have failed twice.
              First in self-moderation, and 2nd in violating a specific policy.
            </li>
          </ul>
        </div>
      </section>
      <section id="bots" className="two">
        <div className="container">
          <header>
            <h2>Bot Accounts</h2>
          </header>
          <p>
            Bots come in a wide variety of frequencies and topic spaces. To
            limit which bot accounts are posting on our server, bot accounts
            must be approved to join. Although bot accounts are not necessarily
            corporate accounts, and those that are would fall under the rules
            described in the <a href="#corporate">corporate account policy</a>,
            there are a few common threads between them copied in below:
          </p>
          <ul>
            <li>
              Bots, like corporate accounts, are held to a higher standard.
            </li>
            <li>
              Don't post content either by type or frequency that
              <i>you</i> wouldn't want on your timeline if you weren't running
              the bot.
            </li>
            <li>
              We will moderate bot accounts as they are reported and apply our
              best judgement.
            </li>
            <li>
              We will be moderating the bot accounts in a way that does not
              create undue burnden on our volunteer mod team.
            </li>
          </ul>
          <header>
            <h3>Bot Account Posting Rules</h3>
          </header>
          <ul>
            <li>
              All bots must select the bot checkbox in their profile settings
            </li>
            <li>
              Bot accounts are limited to <i>5 posts per day</i> if there isn't
              agreed something else with mods and community.
            </li>
            <li>
              Reactionary bots are not permitted - e.g. bots that respond to
              user posts based on keywords and similar.
            </li>
            <li>
              Bots that violate rules about spam, fundraising, 18+, corporate,
              etc. account types will be suspended.
            </li>
          </ul>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
