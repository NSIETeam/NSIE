import sys, json, urllib.request

url = 'https://api.github.com/repos/NSIETeam/NSIE/commits/f73cac3/check-runs'
req = urllib.request.Request(url, headers={'Accept': 'application/vnd.github.v3+json'})
resp = urllib.request.urlopen(req)
d = json.loads(resp.read())

for cr in d['check_runs']:
    print(f"name={cr['name']} id={cr['id']} conclusion={cr['conclusion']} annotations={cr['output']['annotations_count']}")
    # Get annotations
    if cr['output']['annotations_count'] > 0:
        aurl = cr['output']['annotations_url']
        areq = urllib.request.Request(aurl, headers={'Accept': 'application/vnd.github.v3+json'})
        aresp = urllib.request.urlopen(areq)
        anns = json.loads(aresp.read())
        for a in anns:
            print(f"  ANNOTATION: {a.get('path','')}:{a.get('start_line','')} {a.get('message','')}")
