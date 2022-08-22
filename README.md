## CAZE

## Inspiration

The initial idea was inspired from Patreon which is a web2 crowdfunding and supporting platform for creators. We wanted to build a project in web3 and started working on Caze to support all the creators out there using web3 technologies . A platform where audience can subscribe for special to creators and enjoy a bunchfull of exclusive perks offered from different subscription plan.

## What it does

Caze is decentralize platform to support your favorite creators on a subscription basis, creators from different domains can create a account.

Caze is a totally free, decentralized & Open source for creators with no fees attached , so no worries of paying hefty fees to the big platforms and enjoy it to your fullest.

Creators can fill the form on the `/Register` page and the then their data is added onto IPFS and then in the contract, later they get NFT dropped straight to the registered wallet. A sharable profile link is provided for the creator profile to share with their audience with subscription plans.

Creator can post from the `/Account` section specially designed for them. Posts are also stored on IPFS and in the contract . Also shows the balance and subscribers of the creator

All creator profiles registered on the platform are displayed under the `/Explore` section , extracted right from the contract and IPFS . Users can explore the page to look out for their favourite creators.

A separate creator `/profile` page contains all the info for data of the creator from contract and IPFS . Title , Bio , pfp and the posts from the creator itself .

Folks can visit any creators profile and subscribe them on a monthly basis and can choose among three different plans. A subscriber will then have access to member only posts uploaded by a creator. A NFT according to the plan is already minted in the backend.

## How we built it

To build the front-end for this project we used:

- **HTML**
- **CSS**
- **JavaScript**
- **NextJs**
- **Wagmi.js**
- **Ethers.js**
- **Canva**
- ** Rainbow Kit**

The frontend dApp is built with Next.js and React.js . The code logic and components are created in ES6 JavaScript. The contracts interaction with the frontend is done with help of Wagmi.js and Ethers.js . The management of the contracts is done with same. Wagmi Client handles the connection of dApp with the Polygon Blockchain to fetch the needed data from the contract. Rainbow Kit handles the wallet connection for the signer and provides the connect button for the whole app.

For backend the following technologies are used:

- **IPFS/web3.storage** : For decentralized storage
- **Polygon** : Smart-contracts deployment
- **Spheron** : Decentralized hosting of our frontend

Smart contracts are written in Solidity. There are 4 contracts that handle Creators , Posts , Subscriptions and NFTs for the Caze platform . The contracts is well tested and written . They are deployed on the Mumbai Test net for demonstration purposes with help of hardhat and Alchemy as a node Provider . Polygon chain serve as a backbone for our dApp that hosts all the blockchain related transactions.
[Contract](https://github.com/kushagrasarathe/caze/tree/main/hardhat/contracts)

NFTs are of 4 types , 1 is for Creator , and other 3 for subscription plans like Silver , Gold , Platinum respectively that are minted directly from the backend for all the respective tasks.

[NFT Collection](https://testnets.opensea.io/collection/caze)

IPFS is data storage platform for our platform . All the data like Creator Profiles , Creator Posts are stored on IPFS with web3.storage SDKs , with help of docs provided by the team. Then the data entered in the input form is converted into JSON format , then JSON file is uploaded to IPFS with web3.storage . Then CID Links are stored in the contract for immutability and security of the data. Then the data is rendered in the frontend after fetching the JSON object directly with the CID links stored in the contract.
Check this component : [StoreContent](https://github.com/kushagrasarathe/caze/blob/main/frontend/src/components/StoreContent.jsx) , [StoreData](https://github.com/kushagrasarathe/caze/blob/main/frontend/src/components/StoreData2.jsx) ,
[StorePost](https://github.com/kushagrasarathe/caze/blob/main/frontend/src/components/StorePost.jsx)

Spheron hosts our dApp by storing the data on the IPFS making it the dApp fully decentralized and compatible with the web3 ecosystem.

## Challenges we ran into

These are some challenegs and issues we faced while building the project , but we even enjoyed overcoming them too.

- We had faced some issue in fetching data from IPFS and rendering the data in the frontend with mapping . We struggles with the docs for fetching the data in proper format , but later figured it out with bit of tries.
- Implementing dynamic mapping for creator profiles with our frontend React.js and render the profile for each creator.
- We faced issues with the contract , Majorly the subscription contract because it was a bit complex to manage the data for the creators and users but in the end , after improving it day by day , we pulled it off.

## Accomplishments that we're proud of

- We are finally able to create a creator centric platform in web3 Deso , which can handle the subscriptions with help of contracts and at the same time ,data being stored on a secure and decentralized blockchain.
- The platform is totally for the creators so they don't have to worry about paying hefty fees to the mediator platforms in between.
- Bring our idea to life and at the same time creating something that can help so many creators out there, so that they can do their best in entertaining & educating their subscribers.
- We used IPFS for data storage and query the same ,a decentralized storage , making our platform fully decentralized were we don't have to worry about centralized servers handling them.
- We created a very intensive and complex contract for the first time to manage all the subscriptions for the platform.

## What we learned

- Using Dynamic mapping in **NextJs** for creator profiles for the first time and even rendering it totally on the go.
- We learned a lot about what creators want , what they can actually offer and how their contribution can create a valuable change to others life , be it is educating someone or entertaining them.
- We learned about data fetching and data rendering from IPFS and contract and this has been a great learning for us, as now we have figured out how to manage data for the first time.

## What's next for Caze

We want to add more features into this project and continue building it, some of the features include:

- Custom plans for creators , give freedom for them to set their plans
- Categorization of the creators on basis of genre to enhance the User experience
- Work on the perks offered by creator , create a token gating on the platform for each type of subscription
- Enhance the account section for both account and creators
- 1-1 Meeting and chat feature embedded right into the app .
