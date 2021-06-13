export interface Data {
  vita_dao: {
    total_raised: number;
    percentage_remaining: number;
  };
  proposals: {
    project: {
      id: string;
      funding_stage: string;
      duration?: string;
      title: string;
      research_lead: string;
      institution: string;
      clinical_stage: string;
      ip_status: string;
      budget: number;
      budget_currency: string;
      summary: string;
      project_summary: string;
      aims_and_hypothesis: string;
    };
    id: string;
    proposal_type: string;
    title: string;
    summary: string;
    details: string;
    link: string;
    voting_start_date: string;
    voting_end_date: string;
    votes_yes: number;
    votes_no: number;
  }[];
}

export const data = {
  vita_dao: {
    total_raised: 230450.0,
    percentage_remaining: 0.14,
  },
  proposals: [
    {
      project: {
        id: "kkjngfsfd235",
        funding_stage: "funded  project",
        title:
          "Therapeutic Compounds for Efficacious Topical Treatment of Skin Cancer",
        research_lead: "Kent Fourie",
        institution: "University of Stellenbosch",
        clinical_stage: "preclinical",
        ip_status: "patent filled",
        budget: 2600000,
        budget_currency: "ZAR",
        summary:
          "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socio-economic challenge to societies world wide.",
        project_summary:
          "What if therapeutics to slow down the aging process and prevent age-related disease already existed? Recently, in an unprecedented effort, a large-scale study employing advanced machine learning methods analyzed medical records from over 4 million individuals in the Danish Health System’s medical and prescription records. The study, consisting of over 1.4 billion prescriptions, found that a number of prescription drugs were highly associated with longer life- and health-span in long-live populations. Here, we present a unique investment opportunity. We seek to validate these observations through a series of carefully conducted wet lab experiments. If successful, this work could result in the repurposing of several FDA-approved therapeutics for the purpose of extending human lifespan, at a lower cost and over faster timelines than conceivably possible with de novo drug discovery. This unique investment opportunity allows savvy longevity investors the chance to own a share of the potential intellectual property generated from these studies, and in turn, a potential share in the future of life extension.",
        aims_and_hypothesis:
          "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socioeconomic challenge to societies world-wide. Interventions that ensure healthy aging are therefore of critical importance.",
      },
      id: "kkjngfsfd235",
      proposal_type: "governance",
      title: "New members & minimum contributions",
      summary:
        "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socio-economic challenge to societies world wide.",
      details:
        "As originally conceived, VitaDAO provided Members with 1% interests in VitaDAO in exchange for contributions to projects. Each 1% interest represented 100,000 units in the underlying legal entity sitting beneath VitaDAO and there were 10,000,00 units in VitaDAO in total. As of several weeks ago, all current interests in VitaDAO have been sold. And, there are currently a growing number of people (and entities) that would like to join VitaDAO as Members. The following proposal would enable VitaDAO to accept new Members, if so desired, by authorizing an increase in the number of units in VitaDAO This proposal would also authorize the Members to: (a) determine the appropriate process for admitting new Members or enable existing Members to increase their respective interest in VitaDAO; and (b) enable the Members to set a minimum contribution amount. Votes to admit new members or set minimum contribution amounts would not be based on a majority vote. Rather, like decisions to support projects, these votes would be based on whether there are more “Yes” votes than “No” votes during a given voting period. This process would be facilitated via a separate governance proposal through the dApp.",
      link: "https://docs.google.com/documents/d/",
      voting_start_date: "1616437446695",
      voting_end_date: "1616523846695",
      votes_yes: 135,
      votes_no: 58,
    },
    {
      project: {
        id: "ldajkvcn54289h59h9",
        funding_stage: "funded project",
        title:
          "Therapeutic Compounds for Efficacious Topical Treatment of Skin Cancer",
        research_lead: "Kent Fourie",
        institution: "University of Stellenbosch",
        clinical_stage: "preclinical",
        ip_status: "patent filled",
        budget: 2600000,
        budget_currency: "ZAR",
        summary: "PCR Data from studies in human cells.",
        project_summary:
          "What if therapeutics to slow down the aging process and prevent age-related disease already existed? Recently, in an unprecedented effort, a large-scale study employing advanced machine learning methods analyzed medical records from over 4 million individuals in the Danish Health System’s medical and prescription records. The study, consisting of over 1.4 billion prescriptions, found that a number of prescription drugs were highly associated with longer life- and health-span in long-live populations. Here, we present a unique investment opportunity. We seek to validate these observations through a series of carefully conducted wet lab experiments. If successful, this work could result in the repurposing of several FDA-approved therapeutics for the purpose of extending human lifespan, at a lower cost and over faster timelines than conceivably possible with de novo drug discovery. This unique investment opportunity allows savvy longevity investors the chance to own a share of the potential intellectual property generated from these studies, and in turn, a potential share in the future of life extension.",
        aims_and_hypothesis:
          "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socioeconomic challenge to societies world-wide. Interventions that ensure healthy aging are therefore of critical importance.",
      },
      id: "ldajkvcn54289h59h9",
      proposal_type: "ip",
      title: "New members & minimum contributions",
      summary: "PCR Data from studies in human cells.",
      details: "The following data set is to be listed on Ocean Marketplace: ",
      link:
        "https://visme.co/blog/wp-content/uploads/2017/07/History-Stacked-Area-Charts.jpg",
      voting_start_date: "1616437446695",
      voting_end_date: "1616696646695",
      votes_yes: 15,
      votes_no: 98,
    },

    {
      project: {
        id: "1",
        funding_stage: "funded project",
        title: "The Longevity Molecule",
        research_lead: "Morten Scheibye-Knudsen",
        institution: "University of Copenhagen",
        clinical_stage: "preclinical",
        ip_status: "patent not filled",
        budget: 1200000,
        budget_currency: "USD",
        summary:
          "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socio-economic challenge to societies world wide.",

        project_summary:
          "What if therapeutics to slow down the aging process and prevent age-related disease already existed? Recently, in an unprecedented effort, a large-scale study employing advanced machine learning methods analyzed medical records from over 4 million individuals in the Danish Health System’s medical and prescription records. The study, consisting of over 1.4 billion prescriptions, found that a number of prescription drugs were highly associated with longer life- and health-span in long-live populations. Here, we present a unique investment opportunity. We seek to validate these observations through a series of carefully conducted wet lab experiments. If successful, this work could result in the repurposing of several FDA-approved therapeutics for the purpose of extending human lifespan, at a lower cost and over faster timelines than conceivably possible with de novo drug discovery. This unique investment opportunity allows savvy longevity investors the chance to own a share of the potential intellectual property generated from these studies, and in turn, a potential share in the future of life extension.",
        aims_and_hypothesis:
          "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socioeconomic challenge to societies world-wide. Interventions that ensure healthy aging are therefore of critical importance.",
      },
      id: "1",
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
      votes_no: 58,
    }
  ],
};
