import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Corpay One"
      description="Corpay One is the leading bill pay solution for small-and-medium-sized businesses. Automate your accounts payable tasks like payments, approvals, document scanning and reconciliation with one easy to use solution."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/corpay-one.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Corpay One Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(30, 29, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Corpay One is the leading bill pay solution for small-and-medium-sized businesses. Automate your accounts payable tasks like payments, approvals, document scanning and reconciliation with one easy to use solution.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Amount Lines Updated</div>
  <div>Triggers when amount lines are updated on expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Amount Updated</div>
  <div>Triggers when amount is updated on expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expense Approved</div>
  <div>Triggers when an expense is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expense Declined</div>
  <div>Triggers when an expense is declined.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Category Updated</div>
  <div>Triggers when a new category is set to expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Date Updated</div>
  <div>Triggers when a date is updated on expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Label Updated</div>
  <div>Triggers when a label is updated on expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Updated</div>
  <div>Triggers when a new note is added to expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expense Added</div>
  <div>Triggers when a new expense is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expense Paid</div>
  <div>Triggers when an expense is paid.</div>
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
          <title>Corpay One</title>
          <meta name="description" content="Corpay One is the leading bill pay solution for small-and-medium-sized businesses. Automate your accounts payable tasks like payments, approvals, document scanning and reconciliation with one easy to use solution." />
        </>
      ),
    },
  };
}
