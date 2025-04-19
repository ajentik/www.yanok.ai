import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MailUp"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mailup.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MailUp Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">MailUp is your complete email delivery solution. Send newsletters, create blog digests from RSS feeds, send automated messages when certain conditions occur. Advanced email marketing tools made easy.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Email Sent</div>
  <div>The specified email message on the list has been sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Message Template</div>
  <div>A new email message template was created in the list. MailUp is a multi-list environment and templates are list-specific.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Message in List</div>
  <div>A new email message was created in the list. MailUp is a multi-list environment and messages are list-specific.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>New group added to the specified list. MailUp is a multi-list environment and groups are list-specific.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recipient Pending</div>
  <div>There is a new pending recipient in the specified list. MailUp is a multi-list environment. Pending recipients are those that have not confirmed their subscription to the specified list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recipient Subscribed</div>
  <div>There is a new subscriber in the specified list. MailUp is a multi-list environment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recipient Unsubscribed</div>
  <div>A recipient unsubscribed from the specified list. MailUp is a multi-list environment.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Email Message</div>
  <div>Create a new email message on the specified list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient to Group</div>
  <div>Add recipient to the specified group on the list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Group</div>
  <div>Add a new group to the specified list. MailUp is a multi-list environment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient to List</div>
  <div>Adds a new recipient to the specified list as a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Send Email</div>
  <div>Sends the specified message (previously created in MailUp in the specified List) to the email address specified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to Group</div>
  <div>Send a message to a predefined group in the specified list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Recipient From List</div>
  <div>This method unsubscribe the given recipient from the specified list.</div>
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
          <title>MailUp</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
