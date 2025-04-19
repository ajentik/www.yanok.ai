import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Access Charity Websites"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/access-charity-websites.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Access Charity Websites Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(229, 23, 63, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Access Charity Websites is a digital, scalable solution for fundraising, donor engagement and data collection activities</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Appeal</div>
  <div>Triggers when a new appeal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Donation</div>
  <div>Triggers when a new donation is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Submission</div>
  <div>Triggers when a user completes a form on the website</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group Signup</div>
  <div>Triggers when a member is approved to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new shop or events order is placed by a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is made.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a new member</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Appeal Details</div>
  <div>Gets the details of an appeal for a given appeal Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Donation Details</div>
  <div>Gets more information about a single donation, using the donation\'s Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Member Details</div>
  <div>Gets the member details for a given member Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Payment Details</div>
  <div>Gets the payment details for a given payment Id</div>
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
          <title>Access Charity Websites</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
