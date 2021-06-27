import fs from 'fs';
const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

export async function createProposalData() {
    const data = JSON.stringify({id: "1",
    proposal_type: "project",
    title: "New members & minimum contributions",
    summary:
      "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socio-economic challenge to societies world wide.",
    details:
      "As originally conceived, VitaDAO provided Members with 1% interests in VitaDAO in exchange for contributions to projects. Each 1% interest represented 100,000 units in the underlying legal entity sitting beneath VitaDAO and there were 10,000,00 units in VitaDAO in total. As of several weeks ago, all current interests in VitaDAO have been sold. And, there are currently a growing number of people (and entities) that would like to join VitaDAO as Members. The following proposal would enable VitaDAO to accept new Members, if so desired, by authorizing an increase in the number of units in VitaDAO This proposal would also authorize the Members to: (a) determine the appropriate process for admitting new Members or enable existing Members to increase their respective interest in VitaDAO; and (b) enable the Members to set a minimum contribution amount. Votes to admit new members or set minimum contribution amounts would not be based on a majority vote. Rather, like decisions to support projects, these votes would be based on whether there are more “Yes” votes than “No” votes during a given voting period. This process would be facilitated via a separate governance proposal through the dApp.",
    link: "https://docs.google.com/documents/d/",
    voting_start_date: "1616437446695",
    voting_end_date: "16161617145678",
    votes_yes: 135,
    votes_no: 58,});
    const cid = await ipfs.add(data);
    console.log(cid);
    return cid;
}
export async function getProposalData(hash) {
    return await ipfs.cat(hash)
}