const Voting = artifacts.require("Voting");

contract('Voting', accounts => {
    it('should allow voting', async () => {
        const instance = await Voting.deployed();
        await instance.vote(0, { from: accounts[0] });
        const candidates = await instance.getCandidates();
        assert.equal(candidates[0].voteCount.toNumber(), 1, "Voting failed");
    });
});
