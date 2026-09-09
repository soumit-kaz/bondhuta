# Sources & Citations — Neural Network সিরিজ

Used to ground episodes in published research and verify claims. Each source tagged with episodes that cite it.

---

## Primary Research — Perceptron Convergence & Mistake Bounds

**Rosenblatt, F. (1958).** "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain." *Psychological Review*, 65(6), 386–408. DOI: 10.1037/h0042519.

- **Cited in:** Episode 3 (generic reference to convergence proofs)
- **Used for:** Historical grounding of the learning rule; foundational formulation

---

**Novikoff, A.B.J. (1962).** "On convergence proofs on perceptrons." *Proc. Symposium on the Mathematical Theory of Automata*, Vol. 12, pp. 615–622, Polytechnic Institute of Brooklyn.

- **Cited in:** Episode 3 (research notes, not user-facing)
- **Used for:** Convergence theorem verification; mistake-bound theory (internal reference only, name not used on page per brief)

---

**Mohri, M. & Rostamizadeh, A.** "Perceptron Mistake Bounds." arXiv:1305.0208. cs.nyu.edu/~mohri/pub/pmb.pdf.

- **Cited in:** Episode 3 (research verification)
- **Used for:** Contemporary formulation of mistake bounds; verification that n-vs-√n growth fact is standard

---

## Convergence & Learning Dynamics

**Oregon State University ML course notes.** "Perceptron Convergence Theorem and Proof" and "Perceptron Cycling Theorem." web.engr.oregonstate.edu/~huanlian/teaching/ML/2024fall/unit2/convergence.html

- **Cited in:** Episode 3 (pedagogical reference)
- **Used for:** Course-level proof structure; verification of convergence conditions

---

**Columbia CS4252 lecture notes, Michael Collins.** Perceptron convergence notes.

- **Cited in:** Episode 3 (research corroboration)
- **Used for:** Extension of convergence theory to non-zero weight initialization (W₀ ≠ 0 case)

---

**Murphy.** "Verified Perceptron Convergence Theorem" (Coq formalization). ACM CPP 2018. dl.acm.org/doi/pdf/10.1145/3088525.3088673.

- **Cited in:** Episode 3 (formalization verification)
- **Used for:** Formal proof that convergence theory extends to arbitrary w₀ (non-zero starting weights)

---

## Catastrophic Forgetting & Sequential Learning

**McCloskey, M., & Cohen, N. J. (1989).** "Catastrophic interference in connectionist networks: The sequential learning problem." *The Psychology of Learning and Motivation*, Vol. 24, pp. 109–165. Academic Press.

- **Cited in:** Episode 3 (research pack §7, referenced by name in episode)
- **Used for:** Foundational definition and taxonomy of catastrophic forgetting

---

**Ratcliff, R. (1990).** "Connectionist models of recognition memory: Constraints imposed by learning and forgetting functions." *Psychological Review*, 97(2), 285–308. DOI: 10.1037/0033-295X.97.2.285.

- **Cited in:** Episode 3 (research corroboration)
- **Used for:** Independent empirical demonstration of interference in neural models

---

**French, R. M. (1999).** "Catastrophic forgetting in connectionist networks." *Trends in Cognitive Sciences*, 3(4), 128–135. DOI: 10.1016/S1364-6613(99)01294-2.

- **Cited in:** Episode 3 (research reference)
- **Used for:** Comprehensive review of forgetting phenomena; distinction between sequential and continual learning

---

**Kirkpatrick, J. et al. (2017).** "Overcoming catastrophic forgetting in neural networks." *PNAS* / arXiv:1612.00796.

- **Cited in:** Episode 3 (research reference)
- **Used for:** Modern mitigation strategies (Elastic Weight Consolidation); context for why the problem matters in contemporary deep learning

---

## Scikit-Learn Implementation Reference

**scikit-learn documentation.** `sklearn.linear_model.Perceptron` (`eta0` default = 1; equivalence to `SGDClassifier(loss="perceptron", eta0=1, learning_rate="constant", penalty=None)`).

- **Cited in:** Episode 3 (implementation verification)
- **Link:** scikit-learn.org/stable/modules/generated/sklearn.linear_model.Perceptron.html, v1.9
- **Used for:** Verification that η = 1 is the default in modern ML libraries; confirms historical continuity from Rosenblatt

---

## Direct Artifact Verification

**Source code: পর্ব ২.** `src/pages/neural-network/NeuralNetworkLearning.tsx`

- **Cited in:** Episode 3 (all researchers independently verified)
- **Used for:** Ground truth on: dataset values, update rule implementation, x₀=1 bias definition, all six epochs of printed arithmetic

---

**Source code: Episode 3 orchestrator verification.** `.bondhuta/episodes/003/orchestrator-verification.md`

- **Purpose:** Tie-breaker on all numerical claims this episode
- **Used in:** Episodes 3, and available for Episodes 4+

---

## Citation Practice

- **Cited on user-facing page:** Only when necessary for reader trust (e.g., catastrophic forgetting in Episode 3)
- **Internal research reference:** Sources used to verify facts without naming them on page
- **Rule:** No citation in narrative prose unless the name itself carries pedagogical weight (e.g., "catastrophic forgetting" names a phenomenon الق reader needs to Google)

