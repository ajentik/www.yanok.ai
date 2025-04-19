import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ChatDaddy"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/chatdaddy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ChatDaddy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 155, 155, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ChatDaddy is the ultimate WhatsApp automation & marketing tool</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Created</div>
  <div>Triggers when a new contact is created on ChatDaddy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Tag Updated</div>
  <div>Triggers when a contact\'s tag is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Created</div>
  <div>Triggers when a tag is created on ChatDaddy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Members</div>
  <div>The team members on your signed in team</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag / Custom Field to Contacts</div>
  <div>Adds a Tag or Custom Field to a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Send a message on WhatsApp via ChatDaddy</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message Flow</div>
  <div>Send a message on WhatsApp via ChatDaddy, using a ChatDaddy message flow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Assignee of Contact</div>
  <div>Set\'s the Assignee of a particular contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Search Contacts for a specific Contact</div>
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
          <title>ChatDaddy</title>
        </>
      ),
    },
  };
}
