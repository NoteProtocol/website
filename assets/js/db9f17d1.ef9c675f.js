"use strict";(self.webpackChunknote_protocol=self.webpackChunknote_protocol||[]).push([[3497],{2188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var c=t(6070),i=t(5296);const a={title:"",sidebar_position:4.1,sidebar_label:"Off-chain Smart Contracts"},r=void 0,s={id:"protocol/Token/4.1-OffchainContracts",title:"",description:"4.1 Off-chain Smart Contracts",source:"@site/docs/protocol/04-Token/4.1-OffchainContracts.md",sourceDirName:"protocol/04-Token",slug:"/protocol/Token/4.1-OffchainContracts",permalink:"/docs/protocol/Token/4.1-OffchainContracts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4.1,frontMatter:{title:"",sidebar_position:4.1,sidebar_label:"Off-chain Smart Contracts"},sidebar:"docsSidebar",previous:{title:"Token",permalink:"/docs/protocol/Token/4.0-Token"},next:{title:"Data Storage",permalink:"/docs/protocol/Token/4.2-Data"}},o={},d=[{value:"4.1 Off-chain Smart Contracts",id:"41-off-chain-smart-contracts",level:2},{value:"Contract Runtime Variables",id:"contract-runtime-variables",level:3},{value:"Runtime Variables Example",id:"runtime-variables-example",level:3}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"41-off-chain-smart-contracts",children:"4.1 Off-chain Smart Contracts"}),"\n",(0,c.jsx)(n.p,{children:"The smart contracts are written in Bitcoin's advanced smart contract language provided by sCrypt, ensuring that the index validator completes execution within a limited time. Additionally, it supports advanced use cases including Swaps, Oracles, and Zero-Knowledge Proofs."}),"\n",(0,c.jsx)(n.p,{children:"Here is a simple example of an off-chain contract:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"export class N20_Sample extends SmartContract {\n    @prop()\n    readonly tick: ByteString\n\n    @prop()\n    readonly max: bigint\n\n    @prop()\n    readonly lim: bigint\n\n    @prop()\n    readonly dec: bigint\n\n    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint) {\n        super(...arguments)\n        this.tick = tick\n        this.max = max\n        this.lim = lim\n        this.dec = dec\n    }\n\n    @method()\n    public mint(tick: ByteString, amt: bigint) {\n        assert(tick == this.tick, 'Tick does not match')\n        assert(amt <= this.lim, 'Amount check failed')\n    }\n\n    @method()\n    public transfer(tick: ByteString, amt: bigint) {\n        assert(tick == this.tick, 'Tick does not match')\n        assert(amt <= this.lim, 'Amount check failed')\n    }\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"mint"})," and ",(0,c.jsx)(n.code,{children:"transfer"})," functions validate whether the two actions of N20 can be executed. Only after the operations pass contract validation will the indexer record changes in the account balances."]}),"\n",(0,c.jsx)(n.h3,{id:"contract-runtime-variables",children:"Contract Runtime Variables"}),"\n",(0,c.jsx)(n.p,{children:"During the runtime of the smart contract, the indexer provides constants and environmental variables as follows:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"account"}),": ByteString, the initiator's ID (ScriptHash unlocking the UTXO)"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"inputSatoshis"}),": bigint, the satoshis of the current input (Satoshi amount unlocking the UTXO)"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"height"}),": bigint, current height; when the transaction is unconfirmed, it is the latest height plus 6"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"total"}),": bigint, current minted amount of token"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"creator"}),": ByteString, the account of the deployed token\uff08The ScriptHash of the output script\uff09"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"blockHash"}),": ByteString, the hash of the current block, empty string when unconfirmed"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"blockTime"}),": bigint, the timestamp of the current block, 0 when unconfirmed"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"indexInBlock"}),": bigint, the index of the current transaction in the block, 0 when unconfirmed"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"indexInChain"}),": bigint, the index of the current transaction in the chain, 0 when unconfirmed"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"tx"}),": ByteString, the HEX of the current transaction"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"txId"}),": ByteString, the ID of the current transaction"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"version"}),": bigint, the version number of the current transaction, typically 2"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"nLockTime"}),": bigint, the nLockTime of the current transaction"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"inputs"}),": array of current transaction inputs, each input includes:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"prevTxId"}),": ByteString, the ID of the previous transaction"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"outputIndex"}),": bigint, the output index of the previous transaction"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"sequenceNumber"}),": bigint, the unlocking sequenceNumber"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"outputs"}),": array of current transaction outputs, each output includes:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"script"}),": ByteString, the script of the output"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"satoshis"}),": bigint, the satoshis of the output"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"pre_*"}),": the previous transaction's variables"]}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsx)(n.p,{children:"Don't use runtime variables in your parameters of methods."})}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"pre_*"})," variables are only available in the ",(0,c.jsx)(n.code,{children:"transfer"})," function."]})}),"\n",(0,c.jsx)(n.h3,{id:"runtime-variables-example",children:"Runtime Variables Example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"note: { amt: 10000000000n, op: 'transfer', p: 'n20', tick: 'WUKONG#8' },\ndataMap: {\n  constructor: {\n    bitwork: '3230',\n    dec: 8,\n    desc: 'A sample token showcasing a mining contract with progressively increasing difficulty.',\n    lim: 900000000000n,\n    max: 81000000000000n,\n    op: '6465706c6f79',\n    p: '6e3230',\n    sch: 'd594416d99151d3bf962f53a792b1eb244646b984985c863fa8ee27bdfce2992',\n    start: 41305,\n    tick: '57554b4f4e472338'\n  },\n  transfer: {\n    bitwork: '3230',\n    dec: 8,\n    desc: 'A sample token showcasing a mining contract with progressively increasing difficulty.',\n    lim: 900000000000n,\n    max: 81000000000000n,\n    op: '7472616e73666572',\n    p: '6e3230',\n    sch: 'd594416d99151d3bf962f53a792b1eb244646b984985c863fa8ee27bdfce2992',\n    start: 41305,\n    tick: '57554b4f4e472338',\n    amt: [ 10000000000n, 5390000000000n ],\n    height: 44176,\n    blockHash: '',\n    blockTime: 0n,\n    indexInBlock: 0n,\n    indexInChain: 0n,\n    tx: '020000000001029ca52125503b229f19287eb5c1af3a713b0f07e00251a6c3cc4e4983dd8ad7e90000000000ffffffff8b154ed3ef950c5b1c24e8bd04cf17df35c8be2e52dbfe90c83221010783c3280200000000ffffffff032202000000000000225120fb1397257ecba1b51739192853c08209235bb662482eaebf6556170442d7f0502202000000000000225120fb1397257ecba1b51739192853c08209235bb662482eaebf6556170442d7f050542a270000000000160014bc5fa59b7108e0ec633e66233684bef4d4dbad4808401c715b2d877412f895eb20c88c65b90288843a56426cf49031343994c4f56c050e0657d059de04c6fa9149553fbe55d65d8a9c50f750f2adee6d4ad2cc4f7fdc2e84a3616d74cf00000002540be400a26f70a87472616e73666572a170a36e3230a47469636ba857554b4f4e472338000000002a044e4f54456d6d6d20da6c71b73fb5462258b16c60f30465fc5985fe9e63610e671f7c8bfddab3b115ac41c0da6c71b73fb5462258b16c60f30465fc5985fe9e63610e671f7c8bfddab3b1152a56124065fd50baecd89ca4204fbfaa0b66021d78891c9b7b9255a11b1341140248304502210093786529225604a185a4bf893c13e576b1f7cee338d5968ae41c1bdc7e523782022068259b0f910fa7c53eae6cfde0e798593110527289dda17b36eab75631ce7abe012102da6c71b73fb5462258b16c60f30465fc5985fe9e63610e671f7c8bfddab3b11500000000',\n    inputs: [\n      {\n        prevTxId: 'e9d78add83494eccc3a65102e0070f3b713aafc1b57e28199f223b502521a59c',\n        outputIndex: 0n,\n        sequenceNumber: 4294967295n\n      },\n      {\n        prevTxId: '28c38307012132c890fedb522ebec835df17cf04bde8241c5b0c95efd34e158b',\n        outputIndex: 2n,\n        sequenceNumber: 4294967295n\n      }\n    ],\n    outputs: [\n      {\n        script: '5120fb1397257ecba1b51739192853c08209235bb662482eaebf6556170442d7f050',\n        satoshis: 546n\n      },\n      {\n        script: '5120fb1397257ecba1b51739192853c08209235bb662482eaebf6556170442d7f050',\n        satoshis: 546n\n      },\n      {\n        script: '0014bc5fa59b7108e0ec633e66233684bef4d4dbad48',\n        satoshis: 2566740n\n      }\n    ],\n    nLockTime: 0,\n    txId: '88e0ba59cd2b8b7f795b81c06f94e961a2eaa14359c231318d9cb23ff17a0b94',\n    version: 2,\n    account: '209e7f0e21d5314ff6d0370200565f1831a84b8c6666331dca00d8d16dbdcc24',\n    inputIndex: 0,\n    inputSatoshis: 546n,\n    prevTxId: 'e9d78add83494eccc3a65102e0070f3b713aafc1b57e28199f223b502521a59c',\n    outputIndex: 0,\n    prev_amt: [ 5400000000000n ],\n    prev_op: '7472616e73666572',\n    prev_p: '6e3230',\n    prev_tick: '57554b4f4e472338',\n    prev_script: '5120fb1397257ecba1b51739192853c08209235bb662482eaebf6556170442d7f050',\n    prev_satoshis: 546n,\n    prev_height: 44132,\n    prev_blockHash: '0000000000000018483c2904d32ba0d8bd292063ef713d14f5ea5ccc02e10ce7',\n    prev_blockTime: 1725938902,\n    prev_indexInBlock: 52,\n    prev_indexInChain: 44132000052,\n    prev_sender: '209e7f0e21d5314ff6d0370200565f1831a84b8c6666331dca00d8d16dbdcc24',\n    total: 72900000000000n,\n    creator: '6d96a0c6127ef53b161678a8426056c19526a36d1790c72b7f9b118b64e9d4f5'\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},5296:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var c=t(758);const i={},a=c.createContext(i);function r(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);