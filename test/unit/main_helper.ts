import { ChangedFile } from '../../src/github/interfaces';
import { AnalysisResults, ExtendedAnnotation, QualityGate } from '../../src/helper/interfaces';

export const singleChangedFiles: ChangedFile[] = [
  {
    filename: 'test.js',
    status: 'modified',
    additions: 1,
    deletions: 1,
    changes: 1
  }
];

export const doubleChangedFiles: ChangedFile[] = [
  {
    filename: 'test.js',
    status: 'modified',
    additions: 1,
    deletions: 1,
    changes: 1
  },
  {
    filename: 'jest.js',
    status: 'modified',
    additions: 1,
    deletions: 1,
    changes: 1
  }
];

export const analysisFailedNoUrl = {
  completed: false,
  statusCode: 1,
  explorerUrls: [],
  errorList: ['Error'],
  warningList: []
};

export const analysisPassedNoUrl = {
  completed: true,
  statusCode: 0,
  explorerUrls: [],
  errorList: ['Error'],
  warningList: []
};

export const analysisPassedNoUrlWarning5057 = {
  completed: true,
  statusCode: 0,
  explorerUrls: [],
  errorList: ['Error'],
  warningList: ['[WARNING 5057] No url ...']
};

export const analysisPassed = {
  completed: true,
  statusCode: 0,
  explorerUrls: ['explorerUrl'],
  errorList: ['Error'],
  warningList: []
};

export const analysisPassedNoUrlWarning = {
  completed: true,
  statusCode: 0,
  explorerUrls: [],
  errorList: ['Error'],
  warningList: ['[WARNING 5057] No files have been analyzed.']
};

const singleFileQualityGateFailed: QualityGate = {
  passed: false,
  message: 'Project failed 2 out of 2 quality gates',
  url: 'api',
  gates: [
    {
      passed: false,
      name: 'JavaScript',
      conditions: [
        {
          passed: false,
          error: false,
          message: 'message',
          details: {
            itemTypes: ['file'],
            dataKeys: {
              actualValue: {
                title: 'Coding Standard Violations',
                order: 1,
                itemType: 'file'
              }
            },
            itemCount: 1,
            itemLimit: 100,
            items: [
              {
                itemType: 'file',
                name: 'test.js',
                link: 'link',
                data: {
                  actualValue: {
                    formattedValue: '+4',
                    value: 4.0,
                    classes: ['delta-worse']
                  }
                }
              }
            ]
          },
          annotationsApiV1Links: [
            {
              url: 'api'
            }
          ]
        }
      ]
    }
  ],
  annotationsApiV1Links: [
    {
      url: 'api'
    }
  ]
};

const singleFileQualityGatePassed: QualityGate = {
  passed: true,
  message: 'Project passed 2 out of 2 quality gates',
  url: 'api',
  gates: [
    {
      passed: true,
      name: 'JavaScript',
      conditions: [
        {
          passed: true,
          error: false,
          message: 'message',
          details: {
            itemTypes: ['file'],
            dataKeys: {
              actualValue: {
                title: 'Coding Standard Violations',
                order: 1,
                itemType: 'file'
              }
            },
            itemCount: 1,
            itemLimit: 100,
            items: [
              {
                itemType: 'file',
                name: 'test.js',
                link: 'link',
                data: {
                  actualValue: {
                    formattedValue: '+4',
                    value: 4.0,
                    classes: ['delta-worse']
                  }
                }
              }
            ]
          },
          annotationsApiV1Links: [
            {
              url: 'api'
            }
          ]
        }
      ]
    }
  ],
  annotationsApiV1Links: [
    {
      url: 'api'
    }
  ]
};

const doubleFileQualityGatePassed: QualityGate = {
  passed: true,
  message: 'Project passed 2 out of 2 quality gates',
  url: 'api',
  gates: [
    {
      passed: true,
      name: 'JavaScript',
      conditions: [
        {
          passed: true,
          error: false,
          message: 'message',
          details: {
            itemTypes: ['file'],
            dataKeys: {
              actualValue: {
                title: 'Coding Standard Violations',
                order: 1,
                itemType: 'file'
              }
            },
            itemCount: 1,
            itemLimit: 100,
            items: [
              {
                itemType: 'file',
                name: 'test.js',
                link: 'link',
                data: {
                  actualValue: {
                    formattedValue: '+4',
                    value: 4.0,
                    classes: ['delta-worse']
                  }
                }
              },
              {
                itemType: 'file',
                name: 'jest.js',
                link: 'link',
                data: {
                  actualValue: {
                    formattedValue: '+4',
                    value: 4.0,
                    classes: ['delta-worse']
                  }
                }
              }
            ]
          },
          annotationsApiV1Links: [
            {
              url: 'api'
            }
          ]
        }
      ]
    }
  ],
  annotationsApiV1Links: [
    {
      url: 'api'
    }
  ]
};

export const singleAnnotations: ExtendedAnnotation[] = [
  {
    fullPath: 'c:/src/test.js',
    line: 0,
    level: 1,
    category: 'test',
    type: 'test',
    rule: 'test',
    msg: 'test',
    count: 1,
    supp: false,
    instanceName: 'CS'
  }
];

export const singlePreviousReviewComments = [
  {
    id: 1
  }
];

export const analysisResultsPassedNoUrl: AnalysisResults = {
  passed: false,
  message: '',
  missesQualityGate: true,
  projectResults: []
};

export const analysisResultsSingleFileFailed: AnalysisResults = {
  passed: false,
  message: 'Project failed 2 out of 2 quality gates',
  missesQualityGate: false,
  projectResults: [
    {
      analyzedFiles: ['test.js'],
      explorerUrl: 'url',
      project: 'project',
      qualityGate: singleFileQualityGateFailed
    }
  ]
};

export const analysisResultsSingleFilePassed: AnalysisResults = {
  passed: true,
  message: 'Project failed 2 out of 2 quality gates',
  missesQualityGate: false,
  projectResults: [
    {
      analyzedFiles: ['test.js'],
      explorerUrl: 'url',
      project: 'project',
      qualityGate: singleFileQualityGatePassed
    }
  ]
};

export const analysisResultsDoubleFilePassed: AnalysisResults = {
  passed: true,
  message: 'Project failed 2 out of 2 quality gates',
  missesQualityGate: false,
  projectResults: [
    {
      analyzedFiles: ['test.js', 'jest.js'],
      explorerUrl: 'url',
      project: 'project',
      qualityGate: doubleFileQualityGatePassed
    }
  ]
};