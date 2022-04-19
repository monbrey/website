import semver from 'semver';

import MainSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'v8', 'v11', 'v12', 'v13']);
export default new MainSource({
	id: 'kauri',
	name: 'Kauri',
	global: 'Kauri',
	docsRepo: 'discordjs/docs',
	repo: 'monbrey/professor-kauri',
	defaultTag: 'main',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '9.0.0'),
});
