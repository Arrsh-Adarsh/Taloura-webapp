export interface Story {
    storyId?: number,
    storyTitle: string,
    story: string,
    authorId: number,
    createTimestamp: Date,
    updateTimestamp: Date
    // genere: string[]
    // summary?: string,
    // tags?: string[],
    // coverImageUrl?: string,
    // status?: 'draft' | 'published' | 'archived',
    // likes?: number,
    // commentsCount?: number, 
    // language?: string,
    // wordCount?: number,
    // rating?: number,
    // isFeatured?: boolean
};
