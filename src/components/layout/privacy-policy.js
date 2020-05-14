import React from "react";

import widthFinder from "../../utils/widthFinder.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function PrivacyPolicy() {
  return (
    <div className='container privacy-policy'>
      <h1>Groa Privacy Policy</h1>

      <p>
        This privacy policy has been compiled to better serve those who are
        concerned with how their 'Personally identifiable information' (PII) is
        being used online. PII, as used in US privacy law and information
        security, is information that can be used on its own or with other
        information to identify, contact, or locate a single person, or to
        identify an individual in context. Please read our privacy policy
        carefully to get a clear understanding of how we collect, use, protect
        or otherwise handle your Personally Identifiable Information in
        accordance with our website.
      </p>
      <h3>
        What personal information do we collect from the people that visit our
        blog, website or app?
      </h3>
      <p>
        When using or registering on our site, as appropriate, you may be asked
        to enter your name, email address, Preferences or other details to help
        you with your experience.
      </p>
      <h3>When do we collect information?</h3>
      <p>
        We collect information from you when you register on our site, subscribe
        to a newsletter, fill out a form or enter information on our site.
      </p>
      <h3>How do we use your information?</h3>
      <p>
        We may use the information we collect from you when you register, make a
        purchase, sign up for our newsletter, respond to a survey or marketing
        communication, surf the website, or use certain other site features in
        the following ways: To personalize user's experience and to allow us to
        deliver the type of content and product offerings in which you are most
        interested To ask for ratings and reviews of services or products To
        follow up with them after correspondence (live chat, email or phone
        inquiries)
      </p>
      <h3>How do we protect visitor information?</h3>
      <p>
        We do not use vulnerability scanning and/or scanning to PCI standards.
        We use regular Malware Scanning. Your personal information is contained
        behind secured networks and is only accessible by a limited number of
        persons who have special access rights to such systems, and are required
        to keep the information confidential. In addition, all sensitive/credit
        information you supply is encrypted via Secure Socket Layer (SSL)
        technology. We implement a variety of security measures when a user
        enters, submits, or accesses their information to maintain the safety of
        your personal information. All transactions are processed through a
        gateway provider and are not stored or processed on our servers.
      </p>
      <h3>Do we use 'cookies'?</h3>
      <p>
        Yes. Cookies are small files that a site or its service provider
        transfers to your computer's hard drive through your Web browser (if you
        allow) that enables the site's or service provider's systems to
        recognize your browser and capture and remember certain information. For
        instance, we use cookies to help us remember and process the items in
        your shopping cart. They are also used to help us understand your
        preferences based on previous or current site activity, which enables us
        to provide you with improved services. We also use cookies to help us
        compile aggregate data about site traffic and site interaction so that
        we can offer better site experiences and tools in the future. We use
        cookies to: Understand and save user's preferences for future visits
        Compile aggregate data about site traffic and site interactions in order
        to offer better site experiences and tools in the future. We may also
        use trusted third-party services that track this information on our
        behalf. You can choose to have your computer warn you each time a cookie
        is being sent, or you can choose to turn off all cookies. You do this
        through your browser (like Internet Explorer) settings. Each browser is
        a little different, so look at your browser's Help menu to learn the
        correct way to modify your cookies. If you disable cookies off, some
        features will be disabled It won't affect the user's experience that
        make your site experience more efficient and some of our services will
        not function properly.
      </p>
      <h3>Third-party disclosure</h3>
      <p>
        We do not sell, trade, or otherwise transfer to outside parties your
        personally identifiable information unless we provide users with advance
        notice. This does not include website hosting partners and other parties
        who assist us in operating our website, conducting our business, or
        serving our users, so long as those parties agree to keep this
        information confidential. We may also release information when it's
        release is appropriate to comply with the law, enforce our site
        policies, or protect ours or others' rights, property or safety.
        However, non-personally identifiable visitor information may be provided
        to other parties for marketing, advertising, or other uses.
      </p>
      <h3>Third-party links</h3>
      <p>
        Occasionally, at our discretion, we may include or offer third-party
        products or services on our website. These third-party sites have
        separate and independent privacy policies. We therefore have no
        responsibility or liability for the content and activities of these
        linked sites. Nonetheless, we seek to protect the integrity of our site
        and welcome any feedback about these sites.
      </p>
      <h3>Google</h3>
      <p>
        Google's advertising requirements can be summed up by Google's
        Advertising Principles. They are put in place to provide a positive
        experience for users.
        https://support.google.com/adwordspolicy/answer/1316548?hl=en We have
        not enabled Google AdSense on our site but we may do so in the future.
      </p>
      <h3>California Online Privacy Protection Act</h3>
      <p>
        CalOPPA is the first state law in the nation to require commercial
        websites and online services to post a privacy policy. The law's reach
        stretches well beyond California to require a person or company in the
        United States (and conceivably the world) that operates websites
        collecting personally identifiable information from California consumers
        to post a conspicuous privacy policy on its website stating exactly the
        information being collected and those individuals with whom it is being
        shared, and to comply with this policy. - See more at:
        http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf
        According to CalOPPA we agree to the following: Users can visit our site
        anonymously. Once this privacy policy is created, we will add a link to
        it on our home page or as a minimum on the first significant page after
        entering our website. Our Privacy Policy link includes the word
        'Privacy' and can be easily be found on the page specified above. Users
        will be notified of any privacy policy changes: On our Privacy Policy
        Page Users are able to change their personal information: By logging in
        to their account How does our site handle do not track signals? We honor
        do not track signals and do not track, plant cookies, or use advertising
        when a Do Not Track (DNT) browser mechanism is in place. Does our site
        allow third-party behavioral tracking? It's also important to note that
        we do not allow third-party behavioral tracking
      </p>
      <h3>COPPA (Children Online Privacy Protection Act)</h3>
      <p>
        When it comes to the collection of personal information from children
        under 13, the Children's Online Privacy Protection Act (COPPA) puts
        parents in control. The Federal Trade Commission, the nation's consumer
        protection agency, enforces the COPPA Rule, which spells out what
        operators of websites and online services must do to protect children's
        privacy and safety online. We do not specifically market to children
        under 13.
      </p>
      <h3>Fair Information Practices</h3>
      <p>
        The Fair Information Practices Principles form the backbone of privacy
        law in the United States and the concepts they include have played a
        significant role in the development of data protection laws around the
        globe. Understanding the Fair Information Practice Principles and how
        they should be implemented is critical to comply with the various
        privacy laws that protect personal information. In order to be in line
        with Fair Information Practices we will take the following responsive
        action, should a data breach occur, We will notify the users via email
        within 14 business days We also agree to the Individual Redress
        Principle, which requires that individuals have a right to pursue
        legally enforceable rights against data collectors and processors who
        fail to adhere to the law. This principle requires not only that
        individuals have enforceable rights against data users, but also that
        individuals have recourse to courts or government agencies to
        investigate and/or prosecute non-compliance by data processors.
      </p>
      <h3>CAN SPAM Act</h3>
      <p>
        The CAN-SPAM Act is a law that sets the rules for commercial email,
        establishes requirements for commercial messages, gives recipients the
        right to have emails stopped from being sent to them, and spells out
        tough penalties for violations. We collect your email address in order
        to: To be in accordance with CANSPAM we agree to the following: If at
        any time you would like to unsubscribe from receiving future emails, you
        can email us at contact@groa.us and we will promptly remove you from ALL
        correspondence. Contacting Us If there are any questions regarding this
        privacy policy you may contact us at contact@groa.us.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
