import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Simplero"
      description={`Integrated software for info marketing and online courses. Email marketing, billing, membership sites, and content delivery, all in one easy-to-use and affordable package. With the best support in the business.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/simplero.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Simplero Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(252, 84, 87, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Integrated software for info marketing and online courses. Email marketing, billing, membership sites, and content delivery, all in one easy-to-use and affordable package. With the best support in the business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Purchase</div>
  <div>Fired when a purchase expires, is canceled, or is refunded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase</div>
  <div>Will be fired whenever a new purchase is made in Simplero.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggered when someone subscribes to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed From Contact</div>
  <div>Triggers when a tag is removed from a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Contact</div>
  <div>Triggers when a tag is added to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Subscription</div>
  <div>This will be triggered when a customer opts out of a list. An example of a desired action would be to send an Email or SMS.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Tag Existing Contact</div>
  <div>Adds a tag to an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Add a new contact or optionally update the information about a contact in Simplero.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Purchase</div>
  <div>Create a new purchase for a selected product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Contact</div>
  <div>Removes a tag from a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start an Automation for Existing Customer</div>
  <div>Starts an Automation for existing customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to a List</div>
  <div>Subscribe a customer to a list in Simplero.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscription From a List</div>
  <div>Unsubscribe from a list.</div>
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
          <title>Simplero</title>
          <meta name="description" content={`Integrated software for info marketing and online courses. Email marketing, billing, membership sites, and content delivery, all in one easy-to-use and affordable package. With the best support in the business.`} />
        </>
      ),
    },
  };
}
