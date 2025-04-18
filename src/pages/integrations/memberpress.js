import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MemberPress"
      description="MemberPress is an “all-in-one” membership and LMS plugin for WordPress that will help you generate recurring membership revenue from content like blogs, newsletters, online courses, digital downloads, podcasts, videos, and more."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/memberpress.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MemberPress Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 115, 170, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">MemberPress is an “all-in-one” membership and LMS plugin for WordPress that will help you generate recurring membership revenue from content like blogs, newsletters, online courses, digital downloads, podcasts, videos, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed</div>
  <div>Triggers when a course is completed in MemberPress.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lesson Completed</div>
  <div>Triggers when a lesson is completed on a MemberPress course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Deleted</div>
  <div>Triggers when a member is deleted from the system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Signup Completed</div>
  <div>Triggers when a new member completes the signup and their payment is accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quiz Attempted</div>
  <div>Triggers when a quiz is attempted on a MemberPress course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Created</div>
  <div>Triggers when a subscription is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Expired</div>
  <div>Triggers when a subscription expires.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Stopped</div>
  <div>Triggers when a subscription is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Completed</div>
  <div>Triggers when a transaction has completed on MemberPress.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Expired</div>
  <div>Triggers when any transaction expires.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Refunded</div>
  <div>Triggers when any transaction is refunded.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Coupon</div>
  <div>Create a Coupon with the given field values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Create a Member with the given field values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscription</div>
  <div>Create a Subscription with the given field values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Transaction</div>
  <div>Create a Transaction with the given field values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Coupon</div>
  <div>Delete a Coupon with the given id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Subscription</div>
  <div>Delete a Subscription with the given id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Transaction</div>
  <div>Delete a Transaction with the given id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Update a Member with the given id and field values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscription</div>
  <div>Update a Subscription with the given id and field values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Transaction</div>
  <div>Update a Transaction with the given id and field values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Member</div>
  <div>Get member by username or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Subscription</div>
  <div>Get one Subscription with a given subscription number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transaction</div>
  <div>Get one Transaction with a given transaction number.</div>
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
          <title>MemberPress</title>
          <meta name="description" content="MemberPress is an “all-in-one” membership and LMS plugin for WordPress that will help you generate recurring membership revenue from content like blogs, newsletters, online courses, digital downloads, podcasts, videos, and more." />
        </>
      ),
    },
  };
}
