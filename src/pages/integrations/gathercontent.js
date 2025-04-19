import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GatherContent"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/gathercontent.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GatherContent Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 15, 15, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">GatherContent is a Content Operations Platform that brings people, process & content together—to save businesses time & improve content quality.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Comment Was Created</div>
  <div>Trigger when a comment is added to a conversation on an item in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment Was Deleted</div>
  <div>Trigger when a comment is deleted in a conversation on an item in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment Was Edited</div>
  <div>Trigger when a comment is edited in a conversation on an item in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Was Resolved</div>
  <div>Trigger when a conversation is resolved on an item in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Was Created</div>
  <div>Trigger when a conversation is first started on an item in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created for an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Assignees Updated</div>
  <div>Trigger when the assignees on an item are updated in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Was Created</div>
  <div>Trigger when an item is created in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Became Overdue</div>
  <div>Trigger when an item in the project goes past a scheduled date for workflow status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Structure Changed</div>
  <div>Triggers when an item\'s custom structure is changed within a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Status Updated</div>
  <div>Trigger when an item in the project is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Shareable Link Was Created</div>
  <div>Trigger when a shareable link is generated for an item in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Template Was Updated</div>
  <div>Trigger when a template is updated within a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Template Was Created</div>
  <div>Trigger when a template is added to a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">You Were Mentioned in a Comment.</div>
  <div>Trigger when a you have been @\'d in a comment on an item in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">You Were Mentioned in an Edited Comment.</div>
  <div>Trigger when a you have been @\'d in an edited comment on an item in a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Workflow Status Created</div>
  <div>Trigger when a workflow status is added to a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Workflow Status Updated</div>
  <div>Trigger when a workflow status is update in a project</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a General Comment</div>
  <div>Add a general comment to an item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Choose Item Assignee</div>
  <div>Set an assignee for an item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Item</div>
  <div>Create a new item for a given project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Project</div>
  <div>Create a new project for a given account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Item to Folder</div>
  <div>Move an item into a folder</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Choose Item Status</div>
  <div>Set the workflow status for an item</div>
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
          <title>GatherContent</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
