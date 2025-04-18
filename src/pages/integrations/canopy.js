import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Canopy"
      description="Canopy provides a practice efficiency suite that simplifies your practice so you can help more clients. Each of our products automates busywork and connects your entire practice so you can focus on what’s important."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/canopy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Canopy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(4, 13, 20, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Canopy provides a practice efficiency suite that simplifies your practice so you can help more clients. Each of our products automates busywork and connects your entire practice so you can focus on what’s important.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Business Contact</div>
  <div>Triggers when a business contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Business Contact Info Updated</div>
  <div>Triggers when a business contact\'s contact info is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Individual Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Individual Contact Info Updated</div>
  <div>Triggers when an individual contact\'s contact info is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Business Contact</div>
  <div>Creates a business contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Individual Contact</div>
  <div>Creates a new individual contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Business Contact</div>
  <div>updates a business contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Individual Contact</div>
  <div>Updates a new individual contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Business Contact</div>
  <div>Finds a business contact by name, email or external id. Must have one of the following filters: - Business Name- Email Address- External ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds an Individual Contact</div>
  <div>Finds an individual contact by first name, last name, email, and external id. Must have one of the following filters: - First Name and Last Name - Email Address - External ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Business Contact</div>
  <div>Find or create a business contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Individual Client</div>
  <div>Find or create an individual client</div>
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
          <title>Canopy</title>
          <meta name="description" content="Canopy provides a practice efficiency suite that simplifies your practice so you can help more clients. Each of our products automates busywork and connects your entire practice so you can focus on what’s important." />
        </>
      ),
    },
  };
}
