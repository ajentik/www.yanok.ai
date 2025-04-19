import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BirdSend"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/birdsend.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BirdSend Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 197, 7, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BirdSend is an email marketing tool exclusively for content creators only.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Is Created</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Clicks an Email Link</div>
  <div>Triggers when contact clicks on a certain email link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Is Tagged</div>
  <div>Triggers when contact is applied with a certain tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Opens an Email</div>
  <div>Triggers when contact opens a certain email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Subscribes to Sequence</div>
  <div>Triggers when contact subscribes to a certain sequence.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Apply Tag to Contact</div>
  <div>Apply a certain tag to contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Contact</div>
  <div>Remove a certain tag from contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Form</div>
  <div>Add contact to a form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe Contact to Sequence</div>
  <div>Subscribe contact to a sequence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact</div>
  <div>Unsubscribe contact from all mailings.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sequence</div>
  <div>Finds a sequence by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tag</div>
  <div>Finds a tag by name.</div>
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
          <title>BirdSend</title>
        </>
      ),
    },
  };
}
