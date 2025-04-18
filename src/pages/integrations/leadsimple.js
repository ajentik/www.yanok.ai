import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LeadSimple"
      description="LeadSimple is the CRM that property management and real estate companies use to scale and grow."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/leadsimple.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LeadSimple Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(20, 159, 208, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LeadSimple is the CRM that property management and real estate companies use to scale and grow.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Completed</div>
  <div>Triggers when a new call is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Changes Pipeline</div>
  <div>Triggers when a lead changes pipelines.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Changes Stage</div>
  <div>Triggers when a lead changes stages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Changes Tags</div>
  <div>Triggers when a lead\'s tags change.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Created</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Opens Email</div>
  <div>Triggers when a lead opens email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Reassigned</div>
  <div>Triggers when a lead is reassigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inbound Conversation Created</div>
  <div>Triggers when an inbound conversation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Outbound Conversation Created</div>
  <div>Triggers when an outbound conversation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Process Changes Stage</div>
  <div>Triggers when a process changes stages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Process Changes Tags</div>
  <div>Triggers when a process changes tags.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Process Created</div>
  <div>Triggers when a new process is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Process Reassigned</div>
  <div>Triggers when a process is reassigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a task is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Call</div>
  <div>Creates a Call in your account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a Lead in one of your Pipelines. You\'ll need to specify a Pipeline and a Stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead Note</div>
  <div>Creates a note on a lead. You\'ll need to find a lead first using the \'Find Lead\' search action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Process</div>
  <div>Creates a Process in one of your Process Types. You\'ll need to specify a Process Type and a Stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Process Note</div>
  <div>Creates a note on a process. You\'ll need to find a process first using the \'Find Process\' search action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Conversation</div>
  <div>Tags a Conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a Contact in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Conversation</div>
  <div>Updates a Conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates a Lead in one of your Pipelines. You\'ll need to specify a Pipeline and a Stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Process</div>
  <div>Updates a Process. You\'ll need to specify a Process Type and a Stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Property</div>
  <div>Updates a Property.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Unit</div>
  <div>Updates a Unit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact in your account, by id or email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds a Lead in your account, by id, email address or phone number. You can specify a Pipeline to search within, otherwise it searches all Pipelines in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Process</div>
  <div>Finds a Process in your account, by id, contact email address or phone number, property address etc. You can specify a Process Type to search within, otherwise it searches all Process Types in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Property</div>
  <div>Finds a Property in your account, by id or address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Unit</div>
  <div>Searches the units on the property by the Unit Number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user in your account, by name or email address.</div>
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
          <title>LeadSimple</title>
          <meta name="description" content="LeadSimple is the CRM that property management and real estate companies use to scale and grow." />
        </>
      ),
    },
  };
}
