import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Slack"
      description={`Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go. Offering instant messaging, document sharing and knowledge search for modern teams.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/slack.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Slack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(81, 15, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go. Offering instant messaging, document sharing and knowledge search for modern teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Public Message Posted Anywhere</div>
  <div>Triggers when a new message is posted to any public channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Channel</div>
  <div>Triggers whenever a new #channel is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted to Channel</div>
  <div>Triggers when a new message is posted to a specific #channel you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team Custom Emoji</div>
  <div>Triggers when a custom emoji has been added to a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file is uploaded to your workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Mention</div>
  <div>Triggers when a username or highlight word is mentioned in a public #channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted to Private Channel</div>
  <div>Triggers when a new message is posted to a specific #private-channel or multi-dm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pushed Message</div>
  <div>Triggers when you click the "Push to Zapier" button from a message in Slack.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reaction Added</div>
  <div>Triggers when a reaction (aka reactji) is added to a message in a public #channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Saved Message</div>
  <div>Triggers when you save a message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new Slack user is created / first joins your org.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Reminder</div>
  <div>Adds a reminder for yourself or a teammate, just like the</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite User To Channel</div>
  <div>Invite an existing User to an existing Channel. You must be a member of the channel to invite someone to it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Channel Message</div>
  <div>Post a new message to a specific #channel you choose. Can also schedule a message for later.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Direct Message</div>
  <div>Send a direct message to a user or yourself from the Slackbot. Can also schedule a message for later.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Channel</div>
  <div>Creates a new channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Private Channel Message</div>
  <div>Post a new message to a private channel you choose. Can also schedule a message for later.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Channel Topic</div>
  <div>Sets the topic on a selected channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Profile</div>
  <div>Update basic profile fields such as name or title</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Status</div>
  <div>Sets your Slack status to the given text and emoji.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Message</div>
  <div>Finds a Slack message using the Slack Search feature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Email</div>
  <div>Finds a user by matching against their email instead of their username.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by ID</div>
  <div>Finds a user by their ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Name</div>
  <div>Finds a user by matching against their real name instead of their username.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Username</div>
  <div>Finds a user by their username.</div>
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
          <title>Slack</title>
          <meta name="description" content={`Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go. Offering instant messaging, document sharing and knowledge search for modern teams.`} />
        </>
      ),
    },
  };
}
