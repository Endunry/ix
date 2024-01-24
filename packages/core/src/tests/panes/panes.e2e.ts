/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest.describe('pane: basic', () => {
  regressionTest('should be inline, not expanded', async ({ page }) => {
    await page.goto('panes/basic');
    await page.waitForTimeout(1000);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('should be inline, expanded', async ({ page }) => {
    await page.goto('panes/inline-expanded');
    await page.waitForTimeout(1000);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('should be floating, expanded', async ({ page }) => {
    await page.goto('panes/floating');
    await page.waitForTimeout(1000);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mobile', async ({ page }) => {
    await page.goto('panes/mobile');
    await page.setViewportSize(viewPorts.sm);
    await page.waitForTimeout(1000);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mobile, expanded', async ({ page }) => {
    await page.goto('panes/mobile-expanded');
    await page.setViewportSize(viewPorts.sm);
    await page.locator('ix-icon-button').first().click();
    await page.waitForTimeout(1000);
    await page.locator('p').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
