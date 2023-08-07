---
title: Creating a Research Ethics Policy for your Conference or Journal
date: 2015-05-26
---

Conference and journals have a unique opportunity to influence research ethics, as researchers’ careers depend on their ability to understand and meet the requirements for having their research accepted for publication. In the past few years, a number of Computer Science conferences have added research ethics policies to their calls for papers. Good reasons for creating such a policy may include the desire to

*   **educate** **authors** unaware of institutional review requirements or of resources that may help them perform research more ethically,
*   **ensure compliance with institutional review requirements** by requiring authors to attest to knowing and following these requirements,
*   **encourage authors to document their ethical choices and outcomes** to inform reviewers and those designing or evaluating future studies, and
*   **specify how ethics factors into the review process** when reviewers have concerns about the ethics of a submission.

In this article I’ll examine these goals more closely, explain the decisions that you’ll have to make when writing policies to meet these goals, and provide recommendations.

I’ll conclude with sample policy language which you are free to use when constructing a policy for your conference or journal. You need not provide attribution, but I would greatly appreciate an [email](mailto:stuart@post.harvard.edu) if you create a policy that benefited from this article.

Educating Authors
-----------------

Reminding authors that their institutional may have an ethics review process is especially important for Computer Science conferences in areas such as systems, networking, and where many researchers may simply not know they are subject to review requirements.

To illustrate just how endemic the problem is, let me begin by confessing that I was once one of those researchers ignorant of my institutional review obligations. In 2005, I carried out research that examined data derived from human subjects; I wrote a script that examined the file systems that universities provided to their users and reported aggregate statistics about whether these users stored secure shell (SSH) keys encrypted or unencrypted. While my collaborators and I put a great deal of effort into protecting the privacy of those whose data the script inspected, anonymizing and aggregating data before the results were even sent to us, I was ignorant of the need for review and did not even apply for one.

But I was not alone. None of my other three collaborators — all systems researchers — were aware of the review requirement. Further, not one of the respected colleagues who kindly helped us collect data from their institutions asked if we had ethics approval or sought approval specific to their institution. Then, we we submitted the work for publication, the work was accepted with no questions asked about institutional review.

I believe that my experience was not the exception, but the rule, within the systems community at the time. Some in systems would like to maintain a community norm of ignoring institutional review because they believe that the ethical lines in their field should be drawn by researchers in their field, who serve as conference and journal reviewers.

For those of us who want to avoid complicity in publishing research that has bypassed ethical review, it is particularly challenging to educate researchers that review is necessary. When writing your policy, I recommend that you attempt to identify the most common misconceptions in your community and craft the language of your policy to correct them. For example, in the [policy USENIX Security introduced in 2013](https://www.usenix.org/conference/usenixsecurity13/submitting-papers), we included language to clarify that anonymizing data does not automatically exempt research from review.

You may also use your ethics policy to educate authors about resources outside their institutional review process that may help them to perform research ethically. For example, in the networking and security research communities, we have recently established an [Ethics Feedback Panel](http://www.ethicalresearch.org/efp/netsec/) to provide non-binding constructive peer feedback to researchers with questions about conducting research in these areas ethically. The [2015 USENIX Security call for papers](https://www.usenix.org/conference/usenixsecurity15/submitting-papers) encouraged authors with ethical questions to utilize this panel. While we expected most authors would learn about the panel too late for their submission to the 2015 conference, we hoped they might consider using the panel for future submissions.

Ensuring Institutional Compliance
---------------------------------

Even when researchers are aware of institutional ethics review requirements, some may be in denial about whether their research requires contact with the institutional review process.

For example, in the networking community I have heard influential senior researchers insist that they should be able to record traffic from their university network without any  institutional ethics oversight, regardless of their research goal. They argue that users have given their consent for network monitoring (though students cannot really decline consent for something that has become so essential to their lives) and that researching university network traffic is something they have done for decades (the norms of their research community). While most of the research that observes network communications within a university likely does not extract information that would raise concerns among network users, and would likely be approved by review boards, there are many unethical things researchers could do — some unwittingly — if given access to these communications without oversight.

Some researchers in the computer security community believe that IRBs are simply incapable of providing feedback. (While I’m sympathetic to researchers who point out the shortcomings of institutional review boards, researchers’ investment in their research direction and experimental design creates a conflict of interest when evaluating whether their experimental plans are ethical. If best practices for impartial review are inadequate, our community should develop new approaches and demonstrate their efficacy.)

You can address both those researchers who are ignorant of institutional review requirements and those who would defy them by requiring researchers to document their compliance with review requirements. This will help to educate the uninformed that these requirements exist and that they need to learn about when these requirements apply to their research. It will also make it harder for authors who defy their institutional requirements to then feign ignorance if caught. Those who might consider bypassing their institutional review requirements will have to risk having their submission rejected if they elide information about their review requirements, risk having their paper rejected if they explain why review was unnecessary and reviewers disagree, or risk damaging their career if they outright lie about the requirements or their compliance with them.

By requiring authors to document their institutional requirements, you will also help help researchers at institutions not subject to institutional review, as they might otherwise not think to inform the committee of this. By doing so, they will prevent reviewers from speculating that the paper is in violation of the institutional rules.

You may also want to require that authors provide copies of their institutional review application and their approvals. This will allow reviewers to verify that authors did not elide information, downplay field-specific risks that institutional reviews might not know about, or otherwise game the institutional review process. If you do so, you’ll need to make sure that this documentation does not subvert author anonymity.

**Encouraging authors to document ethical choices and outcomes**
----------------------------------------------------------------

Without encouragement, authors may assume that reviewers are uninterested in the ethical choices they have made or of the observations they make when monitoring to see if their experiment causes any harm. They may worry that providing information beyond that the research received an approval will only invite more scrutiny and give reviewers additional excuses to reject the work. They may struggle to fit their motivation, experimental methodology, results, and conclusions into the page limit.

By including a few words encouraging authors to document their ethical choices and outcomes, you can set the expectation that doing so is the norm. The documentation you encourage can help your research community build a record of past ethical decisions, justifications, and outcomes that can guide future research.

To assuage concerns about space, you may want to make documentation of ethical choices and outcomes exempt from page limits, such as by allowing this information to be included in exempt appendices.

**Specifying the role of ethics in reviewing**
----------------------------------------------

By specifying how ethics factors into the review process, you will provide reviewers the information they need to address their ethical concerns and allay authors fears’ that ethical decisions are arbitrary or unfair. Specifically, reviewers need to know whether their ethical concerns should be factored into their overall evaluation of the work or kept separate from technical merit. Reviewers and authors need to know if reviewers will be evaluating the ethics of papers that have received institutional approval. You will want to specify the conditions under which a paper can be rejected due to ethical concerns: who makes the decisions and what constitutes sufficient grounds for rejection.

Some of the greatest variations among existing conference ethics policies result from differing opinions about how ethical concerns should be addressed during the review process. Some conferences, such as the Symposium on Usable Security and Privacy (SOUPS), have encouraged reviewers to factor ethics concerns into their scores. Others, such as UbiComp, have [policies](http://www.ubicomp.org/ubicomp2014/policies/ethics.php) that appear to forbid reviewers from evaluating ethics beyond determining whether authors have provided an honest answer to a check box indicating that they met their institutions’ requirements.

I recommend an approach between these two extremes. I find that, when ethics are mixed with technical evaluation, reviewers may find it too easy to dismiss a paper as unethical with insufficient evidence or scrutiny by the program committee as a whole. On the other hand, I do believe reviewers have a responsibility beyond ensuring institutional compliance. Some of the most egregious historical experiments that inspired the creation of human subjects protections in the United States may still be completely permissible in some countries.

I recommend that the review process first ensure that authors are in compliance with their institutional requirements and that, if concerns remain, they should be addressed separately from the review of a submission’s technical merit.

To discourage authors from circumventing institutional review, you may also want to reserve the right to notify the correct authority within the authors’ institution (such as department chair or dean). You should ensure your policy specifies the right to do this (as is common for most plagiarism policies) as doing so might otherwise violate authors’ expectation of confidential review.

Sample Language
===============

Requirements for Authors
------------------------

Submissions that describe experiments on persons, that analyze data derived from persons (even anonymized data), or that otherwise may put humans (or the systems they rely on) at risk of harm (henceforth known as “human subjects experiments”) should:

1.  Disclose the institutional ethics review requirements of the authors institution(s), or lack thereof.
2.  Provide documentation of all information submitted as part of the review process and of the approvals, both modified to hide the identity of the authors and institutions (attached as an appendix to the paper) and unmodified (emailed to the program chairs). The documentation should include the dates of submission and of any approvals or other correspondence. This documentation does not count against the page limit.
3.  Discuss efforts to ensure the research was conducted in an ethically-defensible manner, including how possible adverse impacts of the experiment, steps taken to minimize the risk of harm, consent or notification of participants or other potentially-affected parties, and any other steps taken to protect the interests of participants and other potentially-affected parties.

Reviewers will assume that submissions of human subjects experiments without a disclosure of institutional review requirements come from institutions that **do** have such requirements. Reviewers will assume that papers that do not document their institutional review approvals **did not** obtain approvals.

Further, we encourage authors to document ethical observations and outcomes, using an appendix that does not count against the paper’s length limit if necessary.

Requirements for Reviewers
--------------------------

Reviewers with ethical concerns may discuss them in their reviews, but must not factor these concerns when scoring or ranking the paper’s merit. Rather, reviewers who have concerns about the ethics of a paper should notify the \[program chairs | editors\] immediately upon discovering the concern. Papers that fail to document institutional review requirements and compliance with those requirements may be rejected by the \[program chairs | editors\] without further review. Papers that are in compliance with institutional requirements, but that still raise ethical concerns among reviewers expert in the field and the risks of conducting such experiments, may still be rejected, but the \[program chairs | editors\] are strongly encouraged to seek feedback on such decisions from the full \[program committee | editorial board\].

If there is evidence that authors may have bypassed institutional review requirements or deceived their institutional reviewers as to the potential risks and harm of an experiment, \[your organization\] reserves the right to waive authors anonymity to notify the authors’ institution of potential violations or notify other affected parties.

\[At the time of this writing\] Stuart Schechter researche\[d\] security, human behavior, research ethics, and other topics at Microsoft Research. He contributed to the introduction of ethics policies for the Symposium on Usable Security and Privacy (SOUPS) in 2011 and USENIX Security in 2013, is the source of much of the language in the policy [Mobisys](http://www.sigmobile.org/mobisys/2014/cfp.php) introduced in 2014, and provided guidance to the Internet Measurement Conference (IMC) which added an ethics policy in 2015. Stuart performs research on ethics as part of a collaboration known as the [Ethical Research Project](https://www.ethicalresearch.org/) and co-founded an [Ethics Feedback Panel for Networking and Security](https://www.ethicalresearch.org/efp/netsec/).

Stuart thanks Joseph Bonneau, Jeremy Epstein, and Erin Kenneally for their feedback on earlier drafts of this article.
