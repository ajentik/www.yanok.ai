import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Hiver"
      description="Hiver is a Gmail-based helpdesk that helps customer service teams easily access, assign and track customer emails on shared mailboxes."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hiver.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Hiver Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 216, 65, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Hiver is a Gmail-based helpdesk that helps customer service teams easily access, assign and track customer emails on shared mailboxes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Updated</div>
  <div>Triggers when a conversation\'s status, assignee, contact, or tags are modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CSAT Rating Received</div>
  <div>Triggers when a CSAT rating is received for a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Sent or Received</div>
  <div>Triggers when an email is sent from or received into a shared mailbox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound Conversation</div>
  <div>Triggers when a new conversation is received into a shared mailbox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outbound Conversation</div>
  <div>Triggers when a new conversation is sent from a shared mailbox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note Created</div>
  <div>Triggers when a new note is created in a shared conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SLA Violated: First Response Time</div>
  <div>Triggers when a First Response Time SLA policy for a conversation is violated. Note: This trigger will not work for Hiver customers that signed up after May 18th, 2022. Please reach out to</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SLA Violated: Resolution Time</div>
  <div>Triggers when a Resolution Time SLA policy applied to a conversation is violated. Note: This trigger will not work for Hiver customers that signed up after May 18th, 2022. Please reach out to</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Hiver</title>
          <meta name="description" content="Hiver is a Gmail-based helpdesk that helps customer service teams easily access, assign and track customer emails on shared mailboxes." />
        </>
      ),
    },
  };
}
