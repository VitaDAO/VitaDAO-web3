import fs from 'fs';
const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

export async function uploadDataToIpfs(proposalData, proposalIndex) {
    const data = JSON.stringify({id: proposalIndex + 1,
    proposal_type: proposalData.proposal_type,
    title: proposalData.title,
    summary: proposalData.summary,
    details: proposalData.details,
    link: proposalData.link,
    voting_start_date: Date.now(),
    voting_end_date:  Date.now()});
    const cid = await ipfs.add(data);
    return cid;
}
export async function getProposalDataFromIPFS(hash) {
    return await ipfs.cat(hash)
}