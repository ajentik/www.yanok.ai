import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Swit"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/swit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Swit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 88, 93, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Swit is one work suite for Chat and Project Management. With Swit, you can replace other team collaboration tools.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Idea</div>
  <div>Triggers when a new idea is posted on a specific channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Idea Starred</div>
  <div>Triggers when an idea is starred in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when a new message is posted on a specific channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Starred</div>
  <div>Triggers when a message is starred in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when a new tag is created in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created in a specific project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Starred</div>
  <div>Triggers when a task is starred in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment on Task</div>
  <div>Triggers when a new comment is posted to a specific task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member Added to Workspace</div>
  <div>Triggers when a new member is added to a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Done</div>
  <div>Triggers when a task is marked Done in a specific project.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Channel</div>
  <div>Creates a channel in a workspace you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Idea</div>
  <div>Posts an idea on a channel you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Message</div>
  <div>Posts a message on a channel you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Direct Message</div>
  <div>Sends a direct message to a member you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project in a workspace you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task in a project you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment on Task</div>
  <div>Posts a comment to a task you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Task</div>
  <div>Deletes a task you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a task you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Channel</div>
  <div>Finds a channel by its name in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Find a project by its name in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tag</div>
  <div>Finds a tag by its name in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds tasks by their title in a specific project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Email</div>
  <div>Finds a user by their email in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Display Name</div>
  <div>Finds a user by their display name in a specific workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Workspace</div>
  <div>Finds a workspace by its name.</div>
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
          <title>Swit</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
