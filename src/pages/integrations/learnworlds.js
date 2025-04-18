import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LearnWorlds"
      description="LearnWorlds is a premium learning platform via which you sell online courses under your own website."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/learnworlds.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LearnWorlds Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(3, 149, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LearnWorlds is a premium learning platform via which you sell online courses under your own website.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assessment Completed</div>
  <div>Triggers when a new assessment is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Certificate (Legacy)</div>
  <div>Triggers when a user is awarded a certificate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Certificate</div>
  <div>Triggers when a user is awarded a certificate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed</div>
  <div>Triggers when a user completes a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Enrolled in Product</div>
  <div>Triggers when a user is enrolled in a product (free, paid or private course, bundle or subscription).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead (Legacy)</div>
  <div>Triggers when a new email lead is captured.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new email lead is captured.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Learning Activity Completed</div>
  <div>Triggers when a user completes a learning activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Created</div>
  <div>Triggers when a payment transaction for a purchase (including one-off purchase, subscription payment, or installment of a payment plan) is successfully charged. For a subscription or a payment plan, a new transaction is created for every single payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Failed</div>
  <div>Triggers when a recurring payment has failed (only for stripe installments and subscriptions).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Previewed a Free Section</div>
  <div>Triggers when a user has previewed a free section of a paid course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Enrollment Purchase (Legacy)</div>
  <div>Triggers when a user is enrolled in or purchases a paid product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription or Payment Plan Canceled</div>
  <div>Triggers when a user cancels their subscription or payment plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Updated</div>
  <div>Triggers when a subscription is updated (either planned for cancellation or renewed, or the selected plan has been updated).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Submission</div>
  <div>Triggers when a new form is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added</div>
  <div>Triggers when a selected tag is added to a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed</div>
  <div>Triggers when a selected tag is removed from a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Unenrolled From Product</div>
  <div>Triggers when a user is unenrolled from a product (paid or private course, bundle or subscription).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User (Legacy)</div>
  <div>Triggers when a new user is registered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is registered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user profile is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create and Enroll User (Legacy)</div>
  <div>Adds a new user and also gives access to a paid course or bundle.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll User in Product (Legacy)</div>
  <div>Gives the user access to a paid course or bundle.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to User</div>
  <div>Adds one or more tags to a Learnworlds User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User (Legacy)</div>
  <div>Adds a new user to the school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Adds a new user to the school. If a user with this email already exists, this user will be updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll User in Product</div>
  <div>Gives the user access to a product: a course (paid, private) or bundle. If a user with this email already exists in Learnworlds, this user will be enrolled in the selected product. If not, then a new user will be created and then enrolled in the selected product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tags From User</div>
  <div>Removes one or more tags from a Learnworlds User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unenroll User From Product</div>
  <div>Removes access from a course (paid, private) or bundle for the given user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a User</div>
  <div>Searches for a user in Learnworlds by email or user id.</div>
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
          <title>LearnWorlds</title>
          <meta name="description" content="LearnWorlds is a premium learning platform via which you sell online courses under your own website." />
        </>
      ),
    },
  };
}
