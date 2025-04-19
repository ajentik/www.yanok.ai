import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AvidMobile"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/avidmobile-da92390.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AvidMobile Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(87, 191, 234, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AvidMobile is a service that enables you to add SMS to your communication and marketing strategies with 2-way SMS, coupons, contests, and loyalty.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Coupon Issued</div>
  <div>Triggers when a new coupon is issued.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Coupon Redeemed</div>
  <div>Triggers when a coupon is redeemed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Loyalty Issued</div>
  <div>Triggers when a new loyalty program is issued.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Loyalty Redemptions</div>
  <div>Triggers when a loyalty program is redeemed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming Messages</div>
  <div>Triggers when the account receives new incoming messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Optin</div>
  <div>Triggers when a new optin to the account or a specific keyword occurs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Optout</div>
  <div>Triggers when a mobile number opts out of the account or a specific keyword.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Member</div>
  <div>Triggers when member data is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Keyword</div>
  <div>Creates a new keyword.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Mobile Numbers to Group</div>
  <div>Adds mobile numbers to the selected group. Each mobile number will receive a confirmation text confirming they want to receive messages unless they have previously been opted in to receive messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Create a group which can store mobile numbers that can receive messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to Group</div>
  <div>Sends a message to the specified groups.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Updates member information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Sends a single message to the supplied mobile number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Keyword</div>
  <div>Find a keyword based on the search term. Will search the keyword_id, keyword and response fields to find a match.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Find a member based on the provided search terms. Fields that will be searched are member_id, first_name, last_name, company_name, mobile, home_email and work_email.</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>AvidMobile</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
