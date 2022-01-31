import Page from './Page'
import React from 'react'
import SimpleTemplate from '../components/SimpleTemplate'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {

    },
    list: {
        maxHeight: '100%',
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
    },
    type: {
        fontWeight: 500,
    },
    subtitle: {
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})

const RepExp = (): React.ReactElement => {
    const classes = useStyles()
    return(
       <Page>
           <SimpleTemplate title="Representative Experience">
               <Typography variant="h5" className={classes.type}>
                    Private Practice Examples
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>CERCLA Liability:</span> Negotiated a consent decree with DOJ/EPA that cost effectively resolved the City of Cass Lake Minnesota’s liability for all past and future response costs for St. Regis NPL Site with full contribution protection; recovered the City’s defense and settlement costs from its legacy insurer.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Environmental and Business Litigation:</span> Lead environmental litigator on three attorney team that obtained a $28.7 million federal jury award under Federal and Delaware law in fraud and breach of contract action against former Fortune 200 owner regarding an alumina refinery property in US Virgin Islands after a three-year battle involving dozens of lawyers. Post-verdict motions upheld $6 million in punitive damages. This verdict also led to the negotiation of a subsequent consent decree with the Virgin Islands’ government and the former owner settling several associated environmental cases, fully resolving the client’s CERCLA liability at no cost, requiring one former owner to spend $20 million to fully remediate the disputed area and a later settlement binding the other former owners to inject $50 million for future remediation.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>PFAS:</span> Provide strategic advice and guidance to a painting and coating company regarding emerging PFAS regulations, restrictions and legislation.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>TSCA Self-Disclosure:</span> Assisted global data storage company with self-disclosure potential TSCA violations to EPA.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Clean Air Act Enforcement:</span> Negotiated the settlement of an EPA Region 5 administrative NESHAP enforcement action against chromium plater for 25 percent less than proposed civil penalty.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Clean Water Act Enforcement:</span> Helped an asphalt company resolve with EPA multiple Clean Water Act compliance and enforcement actions, including settling an oil pollution administrative enforcement action for less than one fifth of a proposed six figure penalty and settling multiple SPCC plan violations for no penalty.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>RCRA and Illinois EPA Enforcement:</span> Negotiated the settlement of an enforcement action by the Cook County Illinois State’s Attorney and Illinois EPA regarding a chromium release, employing a novel and cost effective settlement agreement incorporating low cost, long term monitoring, engineering controls and institutional control agreements with IEPA and the City of Chicago.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>FIFRA:</span> Counseled client on FIFRA importation requirements for pesticide devices, including the voluntary self-disclosure of import violations that resulted in no penalty.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Transactional Advice:</span> Advised real estate investment trust on environmental due diligence, liability assurance letters and environmental terms of purchase agreements for property acquisitions, development and divestitures.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Property Transfer and Environmental Covenants:</span> Enabled former property owner to finalize environmental obligations to property purchaser and obtain release of $250,000 escrow, including the negotiation of an environmental covenant with state environmental agency.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>CERCLA Liability:</span> Advised a paint manufacturer regarding CERCLA legacy site liability connected to recently acquired company.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Auditing:</span> Performed quarterly legal reviews of internal safety and operational risk evaluations by Fortune 100 oil company of its worldwide production, refining and support operations.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>CERCLA Liability:</span> Represented seven waste oil generators in response to EPA CERCLA 104(e) information request, special notice letter and cost recovery demands for the cleanup of defunct waste oil recycler.  After intensive settlement negotiations with EPA and the DOJ, achieved cost-effective settlements for each client.
               </Typography>
               <br />
               <Typography variant="h5" className={classes.type}>
                    In-House Examples
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>PFAS Matters:</span> Advised company business and legal leadership on emerging PFAS regulatory trends, initiatives, and proposed rulemakings at international, federal and state level, and help lead rulemaking comments and challenges across several states. Worked with company government affairs experts and trade groups to assess and respond to agency PFAS initiatives and proposed Congressional and state PFAS legislative actions.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Environmental Compliance:</span> Lead attorney for facility environmental, health and safety law compliance and advice.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>OSHA Compliance and Enforcement:</span> Provided legal support and counsel for OSHA compliance, including employee complaint notifications, information requests, agency inspections and enforcement.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Legacy Waste Site Liability:</span> Lead attorney regarding legacy liability for third party waste sites and current and former company facilities.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Audits:</span> Provided legal guidance, review and oversight of corporate EHS audits and audit policies.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>RCRA Compliance:</span> Lead attorney for RCRA compliance including assessing requirements for specific waste management situations, response to RCRA compliance inspections and enforcement, evaluation of third party waste management vendors and hazardous waste import/export rules.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>Permitting:</span> Assisted and advised company experts and facility EHS staff on air, wastewater and storm water permitting, permit implementation, compliance and agency permit enforcement.
               </Typography>
               <br />
               <Typography>
                   <span className={classes.subtitle}>TSCA:</span> Provided guidance for TSCA-related compliance, including EPA inspections, review of TSCA audits, self-disclosures of TSCA violations, TSCA 8(e) reporting and TSCA 8(c) adverse report recording.
               </Typography>
            </SimpleTemplate>
        </Page>
    )
}

export default RepExp