import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dixa"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dixa.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dixa Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(100, 116, 186, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dixa is omnichannel customer service software that unifies voice, email, chat, and messaging apps into one single platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Internal Note</div>
  <div>Adds an internal note to a conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Message</div>
  <div>Adds a message to an existing conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue Contact for Anonymization</div>
  <div>Queues a contact/user for anonymization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue Conversation for Anonymization</div>
  <div>Queues a conversation for anonymization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Conversation Status</div>
  <div>Changes the conversation status to open or closed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Callback Request</div>
  <div>Create a callback conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Conversation</div>
  <div>Create an Email or Contact Form Conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a contact/user in Dixa with the "end user" or "agent" role.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Conversation</div>
  <div>Adds or Removes a Tag to/from a Conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Conversation by Id</div>
  <div>Search a conversation based on CSID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Conversations by User</div>
  <div>Search for conversations based on User ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Activity Log</div>
  <div>Retrieves the activity log for a given CSID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Conversation Rating</div>
  <div>Retrieves Conversation CSAT Rating</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Conversation Tags</div>
  <div>Retrieves all tags currently on a conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Messages in Conversation</div>
  <div>Retrieves messages in any given conversation based on CSID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by Id</div>
  <div>Retrieves the user based on user ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Queue by Id</div>
  <div>Retrieves a queue\'s information based on queue ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search User by Email Address</div>
  <div>Search for end-users based on email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search User by Phone Number</div>
  <div>Search for end-users based on phone number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Search for a user based on email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Search for end-users based on phone number</div>
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
          <title>Dixa</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
