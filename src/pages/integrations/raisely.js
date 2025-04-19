import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Raisely"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/raisely.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Raisely Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(97, 64, 213, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Raisely is an online fundraising platform to help charities raise money online and nurture their supporters.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign</div>
  <div>Triggers when a new fundraising campaign is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Online Donation</div>
  <div>Triggers when a new online donation (via credit card or PayPal) is made in your campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Interaction</div>
  <div>Triggers when a new custom interaction is created on a person in Raisely CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person signs up to one of your organisation\'s campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Profile</div>
  <div>Triggers when a profile is created within a fundraising campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Profile Updated</div>
  <div>Triggers when a fundraising profile is changed, receives a donation, or logs exercise activity.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add an Interaction</div>
  <div>Add a custom interaction to a person in Raisely.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Tag</div>
  <div>Add a tag to a person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Offline Donation</div>
  <div>Creates a record of a donation in Raisely, useful if you\'re recording offline donations, or donations from other platforms.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Person</div>
  <div>Creates or updates a person in your Raisely account, matched on their email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove a Tag</div>
  <div>Remove a tag from a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Find a matching person based on email address. Optionally create one if none exists.</div>
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
          <title>Raisely</title>
        </>
      ),
    },
  };
}
