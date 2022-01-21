module.exports = async (user, req) => {
    return {
        id: user._id,
        username: user.username,
        displayName: user.displayName || null,
        bio: user.bio || null,
        avatar: user.avatar || null,
        followers: user.followers || 0
    }
}