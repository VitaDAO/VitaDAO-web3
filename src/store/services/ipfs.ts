const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

export async function uploadDataToIpfs(proposalData) {
    let votingEnds=new Date();
    votingEnds.setDate(votingEnds.getDate()+ 5);

    let votingStarts = new Date();
    votingEnds.setDate(votingEnds.getDate()+ 3);
    
    const data = JSON.stringify({
    proposal_type: proposalData.proposal_type,
    title: proposalData.title,
    summary: proposalData.summary,
    details: proposalData.details,
    link: proposalData.link,
    voting_start_date: votingStarts,
    voting_end_date:  votingEnds,
    project: proposalData.project});
    
    const cid = await ipfs.add(data);
    return cid;
}
export async function getProposalDataFromIPFS(hash) {
    return await ipfs.cat(hash)
}