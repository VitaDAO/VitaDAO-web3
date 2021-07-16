const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

const pinata = "https://vitadao.mypinata.cloud/ipfs/"

export async function uploadDataToIpfs(proposalData) {
    
    const data = JSON.stringify({
    proposal_type: proposalData.proposal_type,
    title: proposalData.title,
    summary: proposalData.summary,
    details: proposalData.details,
    link: proposalData.link,
    project: proposalData.project});
    
    const cid = await ipfs.add(data);
    return cid;
}
export async function getProposalDataFromIPFS(hash) {
    try {
        let response = await fetch(pinata+hash);
        let responseText = await response.text();
        try {
            JSON.parse(responseText);
        } catch (e) {
            return "{\"title\":\"Proposal Not Proper JSON\"}";
        }
        return responseText;
       } catch(error) {
        return error;
      }
}