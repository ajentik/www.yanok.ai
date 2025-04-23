import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zapnito"
      description={`Zapnito is the community software platform built to showcase expertise. Build your own branded community and engage the people who really matter to your business.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zapnito.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zapnito Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(232, 90, 82, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zapnito is the community software platform built to showcase expertise. Build your own branded community and engage the people who really matter to your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Progress Updated</div>
  <div>Triggers when a user completes an item in a course and thus updates their course completion percentage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Downloaded</div>
  <div>Triggers when a document is downloaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event RSVP Reply</div>
  <div>Triggers when someone RSVPs to an Event, either to confirm their attendance or that they are skipping the event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Group Membership Created</div>
  <div>Triggers when a user is added to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Account Deleted</div>
  <div>Triggers when a user account is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Account Created</div>
  <div>Triggers when a new user account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Account Updated</div>
  <div>Triggers when user account details are updated, for example when a name, company or job title is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Groups - Add a User</div>
  <div>Adds a user to a group in order to assign permissions from that group to the user and/or display that user in a directory</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tags - Assign Content</div>
  <div>Assigns content items to a given tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invitations - Create</div>
  <div>Sends an email invitation to your Zapnito community. The individual will be sent an invitation email allowing them to setup their account and profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tags - Create</div>
  <div>Create a new Tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tags - List</div>
  <div>List all current Tags</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Groups - Remove a User</div>
  <div>Remove a user from a group in order to remove the group permissions from that user and/or remove them from a directory</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Users - Update Profile</div>
  <div>Update a user\'s basic profile information. For example, name and job title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Groups - Find a User</div>
  <div>Finds a User in a Group - returns a list of users that match a given email address pattern. You can provide a full email address or a partial email address and matched users will be returned.</div>
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
          <title>Zapnito</title>
          <meta name="description" content={`Zapnito is the community software platform built to showcase expertise. Build your own branded community and engage the people who really matter to your business.`} />
        </>
      ),
    },
  };
}
