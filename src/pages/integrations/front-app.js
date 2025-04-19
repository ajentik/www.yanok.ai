import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Front"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/front-app.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Front Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 89, 89, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Front is the shared inbox for teams that brings your email, communication channels, and apps into one platform for collaboration.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is posted on a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rule Triggered</div>
  <div>Triggers when criteria for a team rule is met.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound Message</div>
  <div>Triggers when a new message is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outbound Message</div>
  <div>Triggers when a message is sent (either a new message or a reply).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag Added to Message</div>
  <div>Triggers when a tag is added to a conversation.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment</div>
  <div>Add a comment to a conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Conversation Links</div>
  <div>Add Links to a Conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign or Unassign Conversation</div>
  <div>Assign or unassign a conversation to a teammate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new Account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Draft</div>
  <div>Create a new message draft</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Draft Reply</div>
  <div>Create a new draft reply to an existing conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Link</div>
  <div>Creates a new Link</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Conversation Last Message</div>
  <div>Retrieve the most-recent message of a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Import Message</div>
  <div>Imports a new message into Front.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Link Conversations</div>
  <div>Returns all conversations that a Link is attached to.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Conversation Links</div>
  <div>Remove Links from a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Sends a message creating a new conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Reply</div>
  <div>Replies to a conversation. This action is best used with a Front trigger. For example, auto-reply behavior could be setup by combining a "New Inbound Message" Front trigger with this action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>Updates an existing Account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Conversation</div>
  <div>Update the conversation status, assignee, inbox or tags.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Link</div>
  <div>Update the name of a Link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Finds an existing Account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Account</div>
  <div>Finds an existing Account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds an existing contact.</div>
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
          <title>Front</title>
        </>
      ),
    },
  };
}
