import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CloudBlue Connect"
      description={`CloudBlue Connect is a supply automation platform that manages your products and services, contracts, ordering and fulfillment, usage and subscriptions.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cloudblue-connect.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CloudBlue Connect Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 10, 30, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CloudBlue Connect is a supply automation platform that manages your products and services, contracts, ordering and fulfillment, usage and subscriptions.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Conversation Messages</div>
  <div>Triggers when new messages appears on multiple Connect objects like asset or listing requests. This trigger uses polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Billing Request</div>
  <div>Triggers when a new billing request appears on the billing queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Case</div>
  <div>Triggers when a new helpdesk case appears on the case queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Case Comment</div>
  <div>Triggers when a new comment of helpdesk case appears on the case queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers when a new conversation appears on the conversations queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Per Product Fulfillment Request</div>
  <div>Triggers when a request is created or updated for a particular product using a CloudBlue Connect Webhook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recurring Asset</div>
  <div>Triggers when a new recurring asset appears on the subscriptions queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Asset Request</div>
  <div>Triggers when a new fulfillment request appears on the fulfillment queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tier Account Request</div>
  <div>Triggers when a new tier account request appears on the fulfillment queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tier Configuration Request</div>
  <div>Triggers when a new Tier Configuration Request appears on the fulfillment queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Billing Request</div>
  <div>Triggers when a billing request is created or gets updated on the billing queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Recurring Asset</div>
  <div>Triggers when a recurring asset is created or gets updated on the subscriptions queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Asset Request</div>
  <div>Triggers when a fulfillment request is created or gets updated on the fulfillment queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Tier Account Request</div>
  <div>Triggers when a tier account request is created or gets updated on the fulfillment queue using polling to CloudBlue Connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Tier Configuration Request</div>
  <div>Triggers when a Tier Configuration Request is created or gets updated on the fulfillment queue using polling to CloudBlue Connect.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Accept Tier Account Request</div>
  <div>Vendors can use this action to accept a concrete request that is in status pending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Approve Asset Request</div>
  <div>Vendors can use this action to approve a concrete request that is in status pending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Approve Tier Configuration Request</div>
  <div>Vendors can use this action to approve pending Tier Configuration Requests.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Status of Listing Request</div>
  <div>Vendors and Distributors can use this action to change status Listing Requests.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Case to Closed Status</div>
  <div>Allows the settings on the "Closed" status on a existing helpdesk case in CloudBlue Connect. The case identifier can be passed from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Confirm Asset Request</div>
  <div>Vendors can use this action to confirm a concrete request that is in status revoking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Adjustment Request</div>
  <div>Distributors can create adjustment requests using this action, action has line items support to add multiple items or set multiple parameters of ordering type together with the request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Cancel Request</div>
  <div>Distributors can create cancel requests using this action, in order to cancel an asset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Change Request</div>
  <div>Allows the creation of a single request of type "change" on a existing asset in CloudBlue Connect. The asset identifier can be passed from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Change Request (With Line Items Support)</div>
  <div>Allows the creation of a single request of type "change" on a existing asset in CloudBlue Connect. The asset identifier can be passed from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Purchase Request</div>
  <div>Distributors can create purchase requests using this action, action has line items support to add multiple items or set multiple parameters of ordering type together with the request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Purchase Request (With Line Items Support)</div>
  <div>Distributors can create purchase requests using this action, action has line items support to add multiple items or set multiple parameters of ordering type together with the request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Request From External System Order</div>
  <div>Enables distributors to create or modify one or multiple assets with a single order payload from an external system. Automatically detects products set in the payload. No limits for the maximum number, but at one item of one product needs to be present.For a given product, automatically detects if a new asset needs to be created or existing needs to be adjusted by searching via external asset id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Resume Request</div>
  <div>Allows the creation of a single request of type "resume" on a existing asset in CloudBlue Connect. The asset identifier can be passed from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset Suspend Request</div>
  <div>Allows the creation of a single request of type "suspend" on a existing asset in CloudBlue Connect. The asset identifier can be passed from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Billing Request</div>
  <div>Distributors and Vendors can create a new Billing Request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Billing Request (With Line Items Support)</div>
  <div>Distributors and Vendors can create a new Billing Request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Helpdesk Case</div>
  <div>Can create a helpdesk cases using this action,</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Helpdesk Case Comment</div>
  <div>Can create helpdesk case comments using this action,</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Conversation Message</div>
  <div>Vendors and Distributors can use this actions to add messages to conversations on multiple objects like asset requests, this messages can be seen by vendors and distributors and can provide valuable information like reason why a request has not been approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tier Account Request</div>
  <div>Distributors can create a new Tier Account Request to communicate data changes to vendors.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Update Tier Config Request</div>
  <div>Distributors can create Update Tier Config Requests for existing Tier Configs, the Tier Config ID is required and can be obtained using the search, the list of parameters to update must be known and could be all of type order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Update Tier Config Request (With Line Items Support)</div>
  <div>Distributors can create Update Tier Config Requests for existing Tier Configs, the Tier Config ID is required and can be obtained using the search, the list of parameters to update may come from previous step of the Zap due line item support, please note that only ordering type parameters can be updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reject Tier Configuration Request</div>
  <div>Vendors can use this action to Reject Tier Configuration Requests.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fill Asset Request Parameters</div>
  <div>Vendors can use this action to populate values for Fulfillment parameters on Asset requests that are in pending status, the values can come from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fill Asset Request Parameters (With Line Items Support)</div>
  <div>Vendors can use this action to populate values for Fulfillment parameters on Asset requests that are in pending status, with the help of line items support is possible to populate them dynamically and populate the ones resulting from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fill Tier Config Request Parameters</div>
  <div>Vendors can use this action to populate values for Fulfillment parameters on Tier Config Requests knowing the list of parameters they want to populate, the values can come from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fill Tier Config Request Parameters (With Line Items Support)</div>
  <div>Vendors can use this action to populate values for Fulfillment parameters on Tier Config Requests, with the help of line items support is possible to populate them dynamically and populate the ones resulting from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ignore Tier Account Request</div>
  <div>Vendors can use this action to ignore a concrete request that is in status pending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Case to Inquire Status</div>
  <div>Allows the settings on the "Inquire" status on a existing helpdesk case in CloudBlue Connect. The asset identifier can be passed from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inquire Asset Request</div>
  <div>Vendors can use this action to inquire a pending request knowing the concrete request parameters they want to inquire for.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inquire Asset Request (With Line Items Support)</div>
  <div>Vendors can use this action to inquire a request setting multiple parameters that needs changes, this action is useful when external systems can define the list of parameters to inquire for.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inquire a Tier Configuration Request</div>
  <div>Vendors can use this action to inquire a pending Tier Config Request for parameters obtained on previous steps of the zap, like for example when interacting with Vendor API and API can define multiple fields that requires refinement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inquire a Tier Configuration Request (With Line Items Support)</div>
  <div>Vendors can use this action to inquire a pending Tier Config Request for parameters obtained on previous steps of the zap, like for example when interacting with Vendor API and API can define multiple fields that requires refinement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Case to Pending Status</div>
  <div>Allows the settings on the "Pending" status on a existing helpdesk case in CloudBlue Connect. The case identifier can be passed from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reject Asset Request</div>
  <div>Distributors and Vendors can use this action to reject a concrete request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Case to Resolved Status</div>
  <div>Allows the settings on the "Resolved" status on a existing helpdesk case in CloudBlue Connect. The case identifier can be passed from previous steps of the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revoke Asset Request</div>
  <div>Distributors can use this action to revoke a concrete request that is in status scheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Asset Request</div>
  <div>Vendors can use this action to schedule a concrete request that is in status pending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Helpdesk Case</div>
  <div>Can update helpdesk cases using this action,</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search an Asset</div>
  <div>Search for Assets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search a Billing Request</div>
  <div>Search for Billing Requests.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search a Case</div>
  <div>Search for Cases.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Comments by Case.</div>
  <div>Search for Comments by Case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Conversations.</div>
  <div>Search for Conversations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search a Listing Request</div>
  <div>Search for Listing Requests.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search a Recurring Asset</div>
  <div>Search for Recurring Assets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search an Asset Request</div>
  <div>Search for Asset Requests.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search a Tier Account Request</div>
  <div>Search for Tier Account Requests.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search a Tier Configuration</div>
  <div>Search for Tier Configurations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search a Tier Configuration Request</div>
  <div>Search for Tier Configuration Requests.</div>
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
          <title>CloudBlue Connect</title>
          <meta name="description" content={`CloudBlue Connect is a supply automation platform that manages your products and services, contracts, ordering and fulfillment, usage and subscriptions.`} />
        </>
      ),
    },
  };
}
