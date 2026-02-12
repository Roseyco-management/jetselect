#!/usr/bin/env python3
"""Add strategic internal links to business cluster pages"""

import re

# Define link insertions for each file
LINK_PATTERNS = {
    'belasting/index.html': [
        (r'(Voor een volledig overzicht van alle kosten bij privéjet eigendom)', r'\1, zie onze <a href="../../gids/kosten/">complete kostengids</a>'),
        (r'(Gulfstream G650</a>.*?voor uw holding)', r'\1, <a href="../../vliegtuigen/phenom-300/">Phenom 300</a>, of <a href="../../vliegtuigen/categorieen/light-jets/">light jets</a>'),
        (r'(Voor strategische.*?raadpleeg onze)', r'Voor strategische <a href="../belastingplanning/">belastingplanning</a> en timing van uw aankoop, raadpleeg onze'),
        (r'(Moderne jets zoals.*?Stage 5 standards\.)', r'\1 Voor meer informatie over <a href="../../vliegtuigen/categorieen/midsize-jets/">midsize jets</a> en <a href="../../vliegtuigen/categorieen/heavy-jets/">heavy jets</a>, zie onze categoriegidsen.'),
        (r'(€20,2M total BTW recovery.*?Dutch aircraft ownership\.)', r'\1 Voor gedetailleerde breakdown van alle <a href="../operationele-kosten/">operationele kosten</a> en BTW-terugvordering per categorie, zie onze budgetplanning gids.'),
        (r'(separate aviation BV within corporate group, gepositioneerd onder holding\.)', r'\1 Voor uitgebreide details over verschillende <a href="../structuur/">eigendomsstructuren</a> en SPV opties, zie onze complete gids.'),
        (r'(All legitimate business aircraft operating costs are deductible)', r'\1. Voor specifieke kostenberekeningen per vliegtuigtype, bekijk onze <a href="../../gids/kosten/crew/">crew kosten</a>, <a href="../../gids/kosten/hangar/">hangar kosten</a>, en <a href="../../gids/kosten/insurance/">verzekeringsgids</a>'),
        (r'(Laat ons u helpen uw aircraft ownership fiscaal optimaal te structureren en maximale voordelen te realiseren\.)', r'\1 Bekijk ook onze gidsen over <a href="../../locaties/nederland/schiphol/">Schiphol</a>, <a href="../../locaties/nederland/rotterdam/">Rotterdam The Hague Airport</a>, <a href="../../gids/huren-vs-kopen/">huren vs kopen</a>, <a href="../../gids/fractional-ownership/">fractional ownership</a>, en <a href="../../kopen/privet-jet/leasing/">leasing opties</a>.'),
    ],
    'structuur/index.html': [
        (r'(Het structureren van privéjet eigendom is een van de meest kritieke beslissingen)', r'\1. Voor fiscale implicaties van verschillende structuren, zie onze <a href="../belasting/">belastinggids</a> en <a href="../belastingplanning/">tax planning strategieën</a>.'),
        (r'(BV-structuur biedt substantiële fiscale en juridische voordelen)', r'\1. Voor volledige details over <a href="../../gids/kosten/">operationele kosten</a> en budgettering binnen verschillende structuren, raadpleeg onze kostengids.'),
        (r'(Voor een €15 miljoen aircraft betekent dit)', r'\1. Bekijk ook onze gidsen over <a href="../../vliegtuigen/gulfstream-g650/">Gulfstream G650</a> en <a href="../../vliegtuigen/categorieen/midsize-jets/">midsize jets</a> voor specifieke voorbeelden.'),
        (r'(€5-€15 miljoen aircraft, straightforward domestic operations)', r'\1. Voor <a href="../../vliegtuigen/phenom-300/">Phenom 300</a> en <a href="../../vliegtuigen/categorieen/light-jets/">light jets</a> is dit vaak de optimale structuur.'),
        (r'(Midsize/large cabin jets €8-€20 miljoen)', r'\1 zoals <a href="../../vliegtuigen/categorieen/midsize-jets/">midsize jets</a> en <a href="../../vliegtuigen/categorieen/heavy-jets/">heavy jets</a> opereren vaak vanuit <a href="../../locaties/nederland/schiphol/">Schiphol</a>.'),
        (r'(Professionele structurering bespaart jaarlijks honderdduizenden euros)', r'\1. Zie onze <a href="../operationele-kosten/">operationele kostengids</a>, <a href="../../gids/kosten/maintenance/">onderhoud</a>, en <a href="../../gids/kosten/crew/">crew management</a> voor complete budgettering.'),
        (r'(Ontdek welke optie het beste past bij uw situatie\.)', r'\1 Overweeg ook <a href="../../gids/huren-vs-kopen/">huren versus kopen</a>, <a href="../../gids/fractional-ownership/">fractional ownership</a>, en <a href="../../kopen/privet-jet/leasing/">leasing alternatieven</a>.'),
    ],
    'operationele-kosten/index.html': [
        (r'(Understanding en managing operationele kosten is fundamenteel)', r'\1. Voor fiscale behandeling van deze kosten, zie onze <a href="../belasting/">belastinggids</a> en <a href="../belastingplanning/">tax planning strategieën</a>.'),
        (r'(€700.000-€1,2 miljoen annually.*?Light jets)', r'\1 zoals <a href="../../vliegtuigen/cessna-citation/">Citation</a> en <a href="../../vliegtuigen/phenom-300/">Phenom 300</a>'),
        (r'(€1,3-€2,2 miljoen annually.*?Midsize jets)', r'\1 zoals <a href="../../vliegtuigen/categorieen/midsize-jets/">midsize jets</a> in de categorie'),
        (r'(€2,5-€4 miljoen annually.*?Large cabin jets)', r'\1 zoals <a href="../../vliegtuigen/gulfstream-g650/">Gulfstream G650</a> en andere <a href="../../vliegtuigen/categorieen/heavy-jets/">heavy jets</a>'),
        (r'(Voor een midsize jet flying 300 hours annually)', r'\1 opereren vanaf <a href="../../locaties/nederland/schiphol/">Schiphol</a> of <a href="../../locaties/nederland/rotterdam/">Rotterdam</a>'),
        (r'(Strategic cost management en accurate ROI analysis)', r'\1. Voor eigendomsstructuren die kosten optimaliseren, zie onze <a href="../structuur/">structuurgids</a> en <a href="../../gids/kosten/">complete kostenoverzicht</a>.'),
        (r'(Ontdek hoe u uw operationele kosten kunt optimaliseren\.)', r'\1 Vergelijk ook <a href="../../gids/huren-vs-kopen/">huren versus kopen</a>, bekijk <a href="../../gids/kosten/hangar/">hangar opties</a> bij verschillende <a href="../../locaties/nederland/eindhoven/">Nederlandse luchthavens</a>, en overweeg <a href="../../gids/fractional-ownership/">fractional ownership</a>.'),
    ],
    'belastingplanning/index.html': [
        (r'(Strategische belastingplanning is fundamenteel voor succesvolle corporate aircraft ownership)', r'\1. Voor complete eigendomsstructuren, zie onze <a href="../structuur/">structuurgids</a> en <a href="../belasting/">fiscale voordelen overzicht</a>.'),
        (r'(€400.000-€1,5 miljoen besparen voor typical business jets)', r'\1. Bekijk <a href="../../gids/kosten/">alle operationele kosten</a> en <a href="../operationele-kosten/">budgetplanning</a> voor complete financial overview.'),
        (r'(Voor een midsize jet flying 300 hours annually)', r'\1 zoals <a href="../../vliegtuigen/categorieen/midsize-jets/">midsize jets</a> opereren vanaf <a href="../../locaties/nederland/schiphol/">Schiphol</a>'),
        (r'(€15M Midsize Jet, 300 Hours Annual, BV Ownership)', r'\1 zoals <a href="../../vliegtuigen/gulfstream-g650/">Gulfstream jets</a> en <a href="../../vliegtuigen/phenom-300/">Phenom 300</a>'),
        (r'(Professional tax structuring is essentieel voor succesvolle aircraft ownership\.)', r'\1 Overweeg ook <a href="../../gids/huren-vs-kopen/">huren versus kopen</a>, <a href="../../gids/fractional-ownership/">fractional ownership</a>, en <a href="../../kopen/privet-jet/leasing/">leasing opties</a> voor optimale flexibiliteit.'),
        (r'(Strategische belastingplanning bespaart jaarlijks)', r'\1. Voor operaties vanaf <a href="../../locaties/nederland/rotterdam/">Rotterdam</a>, <a href="../../locaties/nederland/eindhoven/">Eindhoven</a>, of <a href="../../locaties/nederland/maastricht/">Maastricht</a>, zie onze luchthavengidsen.'),
    ],
    'business-case/index.html': [
        (r'(Building a compelling business case for corporate aircraft ownership is critical)', r'\1. Voor fiscale voordelen en tax planning, zie onze <a href="../belasting/">belastinggids</a> en <a href="../belastingplanning/">tax strategieën</a>.'),
        (r'(Gulfstream G280 midsize jet provides 3\.600nm range)', r'\1. Vergelijk met <a href="../../vliegtuigen/gulfstream-g650/">Gulfstream G650</a>, <a href="../../vliegtuigen/phenom-300/">Phenom 300</a>, en andere <a href="../../vliegtuigen/categorieen/midsize-jets/">midsize jets</a>.'),
        (r'(Total annual costs.*?€4,2M)', r'\1. Voor gedetailleerde breakdown, zie <a href="../operationele-kosten/">operationele kosten</a> en <a href="../../gids/kosten/">complete kostengids</a>.'),
        (r'(Detailed timeline demonstrates planning rigor)', r'\1. Voor eigendomsstructuren tijdens implementatie, zie <a href="../structuur/">structuurgids</a> en corporate setup opties.'),
        (r'(Professional business case development demonstrates strategic thinking)', r'\1. Overweeg ook <a href="../../gids/huren-vs-kopen/">huren versus kopen</a> analyse en <a href="../../gids/fractional-ownership/">fractional ownership</a> alternatieven.'),
        (r'(Use this template to create compelling aircraft ownership justification\.)', r'\1 Voor operaties vanaf <a href="../../locaties/nederland/schiphol/">Schiphol</a>, <a href="../../locaties/nederland/rotterdam/">Rotterdam</a>, <a href="../../locaties/nederland/eindhoven/">Eindhoven</a>, zie onze luchthavengidsen en <a href="../../gids/kosten/hangar/">hangar kosten</a> per locatie.'),
    ]
}

def add_links_to_file(filepath, patterns):
    """Add links to a file based on regex patterns"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        changes_made = 0

        for pattern, replacement in patterns:
            new_content = re.sub(pattern, replacement, content, count=1, flags=re.DOTALL)
            if new_content != content:
                content = new_content
                changes_made += 1

        if changes_made > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ {filepath}: Added {changes_made} link groups")
            return True
        else:
            print(f"- {filepath}: No changes made")
            return False

    except Exception as e:
        print(f"✗ {filepath}: Error - {e}")
        return False

def main():
    """Process all files"""
    import os
    base_dir = '/Users/baileybarry/jetselect/improved/zakelijk'

    total_files = 0
    total_updated = 0

    for filename, patterns in LINK_PATTERNS.items():
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            total_files += 1
            if add_links_to_file(filepath, patterns):
                total_updated += 1
        else:
            print(f"! File not found: {filepath}")

    print(f"\n=== Summary ===")
    print(f"Files processed: {total_files}")
    print(f"Files updated: {total_updated}")

if __name__ == '__main__':
    main()
