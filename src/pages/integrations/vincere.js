import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Vincere"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vincere.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Vincere Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(50, 50, 50, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Vincere is an out-of-the-box platform for the front/middle/back office operations of ambitious recruitment firms.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate Added to a Talent Pool</div>
  <div>Triggers when a new candidate is added to a (Public) talent pool in Vincere</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Added to a Distribution List</div>
  <div>Triggers when a new contact is added to a (public) distribution list in Vincere</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate Created in Vincere</div>
  <div>Triggers when a new candidate is created in Vincere</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job Created in Vincere</div>
  <div>Triggers when a new Job is created in Vincere</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Placement Is Added on Vincere</div>
  <div>Triggers when a new placement is added on Vincere</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Subscribed</div>
  <div>Triggers when a candidate subscribes to Vincere emails</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Unsubscribed</div>
  <div>Triggers when a candidate unsubscribes from Vincere emails</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Sent to Specific Group in VinnyChat</div>
  <div>Triggers when a message is sent to specific group in VinnyChat</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Sent to Specific Theme in VinnyChat</div>
  <div>Triggers when a message is sent to specific theme in VinnyChat</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Contact in Vincere</div>
  <div>Create a new contact in Vincere</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Direct Message to VinnyChat</div>
  <div>Send direct message to specific VinnyChat user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to VinnyChat Group</div>
  <div>Send message to specific VinnyChat group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to VinnyChat Shout-Out Theme</div>
  <div>Send message to specific VinnyChat Shout-out Theme</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Email</div>
  <div>Unsubscribes contact/candidate from all emails coming from Vincere</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update GDPR Details</div>
  <div>Updates the GDPR Details for a Candidate</div>
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
          <title>Vincere</title>
        </>
      ),
    },
  };
}
