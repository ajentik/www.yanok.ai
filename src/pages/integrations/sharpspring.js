import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SharpSpring"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sharpspring.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SharpSpring Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(132, 195, 64, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Powerful, affordable marketing tools for marketing agencies and SMBs. Features include email automation, lead capture, and a built in CRM system.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>A new Account is created in SharpSpring.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Open Event</div>
  <div>When a lead opens an email in SharpSpring.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Fillout Event</div>
  <div>When a lead fills out a form in SharpSpring.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>When a lead has been created in sharpspring.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>A new Opportunity is created in SharpSpring.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Page Visit Event</div>
  <div>When a lead visits a new page in SharpSpring.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Create an Account in SharpSpring.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Campaign</div>
  <div>Create a new Campaign in SharpSpring.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Lead</div>
  <div>Create a Lead in SharpSpring or update by email address.</div>
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
          <title>SharpSpring</title>
        </>
      ),
    },
  };
}
